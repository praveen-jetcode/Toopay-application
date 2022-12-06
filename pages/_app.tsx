/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "./components/Layout";
import { Heads } from "./components/Head";
import Head from "next/head";
import { useEffect, useState } from "react";
import LoginPage from "./Login/Loginpage";

export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") === "token") {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

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
