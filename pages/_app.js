// pages/_app.jsx
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jonsuh/hamburgers@master/dist/hamburgers.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
