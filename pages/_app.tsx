/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "./components/Layout";
import { Heads } from "./components/Head";
import Head from "next/head";
import { useState } from "react";
import LoginPage from "./Login/Loginpage";

export default function App({ Component, pageProps }: AppProps) {
  const [token, setTohen] = useState(true);
  return (
    <>
      {token === true ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        // <Component {...pageProps} />
        <LoginPage />
      )}
    </>
  );
}
