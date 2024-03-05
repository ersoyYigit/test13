import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { redirect } from '@remix-run/node';
import { sessionStorage } from '~/utils/storage';

class APIError extends Error {
  status: number;
  messages: string[];
  data: unknown;

  constructor(status: number, messages: string[], data: unknown) {
    super(`API Error: ${messages.join(', ')}`);
    this.status = status;
    this.messages = messages;
    this.data = data;
  }
}

interface TokenResponse {
  data: {
    token: string;
    refreshToken: string;
    userImageURL: string;
    refreshTokenExpiryTime: string;
  };
  messages: [];
  succeeded: boolean;
}

export const client: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

export async function getToken(email: string, password: string) {
  try {
    const {
      status,
      data: { data, messages, succeeded },
    } = await client.post<TokenResponse>('/api/identity/token', {
      email,
      password,
    });
    if (!succeeded) {
      throw new APIError(status, messages, data);
    }
    await storeTokens(data.token, data.refreshToken);

    return data.token;
  } catch (error) {
    console.error('Error getting token:', error);
    throw error;
  }
}

async function refreshToken() {
  try {
    const currentRefreshToken = (await sessionStorage.getSession()).get(
      'refreshToken',
    );

    if (!currentRefreshToken) throw new Error('Refresh token not found');

    const {
      status,
      data: { data, messages, succeeded },
    } = await client.post<TokenResponse>('/api/identity/token/refresh', {
      token: (await sessionStorage.getSession()).get('accessToken'),
      refreshToken: currentRefreshToken,
    });
    if (!succeeded) throw new APIError(status, messages, data);

    await storeTokens(data.token, data.refreshToken);
    return data.token;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}

async function storeTokens(token: string, refreshToken: string) {
  const session = await sessionStorage.getSession();
  session.set('accessToken', token);
  session.set('refreshToken', refreshToken);

  return await sessionStorage.commitSession(session);
}

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      try {
        const newToken = await refreshToken();

        if (error.config && error.config.headers) {
          error.config.headers['Authorization'] = `Bearer ${newToken}`;
          return axios.request(error.config);
        }
      } catch (refreshError) {
        const session = await sessionStorage.getSession();
        session.flash('authError', 'Session expired');
        await sessionStorage.destroySession(session);
        throw redirect('/login');
      }
    }

    return Promise.reject(error);
  },
);
