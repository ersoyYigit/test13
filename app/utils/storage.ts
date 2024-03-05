import { createCookie, createCookieSessionStorage } from '@remix-run/node';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production',
  },
});

export async function getSession(request: Request) {
  const cookie = request.headers.get('Cookie');
  return sessionStorage.getSession(cookie);
}


export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: false /*process.env.NODE_ENV === "production"*/,
  httpOnly: true,
});