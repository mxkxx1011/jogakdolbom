export function isDevelop() {
  const isDev = process.env.NODE_ENV === 'development';
  return isDev;
}
