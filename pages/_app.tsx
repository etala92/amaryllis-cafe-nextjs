import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { Merriweather } from "@next/font/google";
import "@styles/globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amaryllis cafè</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className={merriweather.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default Application;
