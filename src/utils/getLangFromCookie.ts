export function getLangFromCookie(): 'en' | 'ru' {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  return (match ? decodeURIComponent(match[1]) : 'en') as 'en' | 'ru';
}