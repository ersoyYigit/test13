import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import invariant from 'tiny-invariant';
import { getToken } from './axios.server';
import { sessionStorage } from '~/utils/storage';

type User = string;

export const auth = new Authenticator<User>(sessionStorage);

auth.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email');
    const password = form.get('password');

    invariant(typeof email === 'string', 'Invalid email');
    invariant(typeof password === 'string', 'password must be a string');
    invariant(password.length >= 4, 'password must be at least 4 chars');

    try {
      const token = await getToken(email, password);
      return token;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }),
  'user-pass-form',
);

