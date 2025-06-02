import '../styles/globals.css';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/next";
// import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    // Force a repaint to ensure styles are applied
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
  }, []);

  return (
    // <SessionProvider session={session}>
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
    // </SessionProvider>
  );
}

export default MyApp;