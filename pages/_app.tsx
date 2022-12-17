/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, WebLayout } from "./components/Layout";
import { Heads } from "./components/Head";
import Head from "next/head";
import { Children, useEffect, useState } from "react";
import LoginPage from "./Login/Loginpage";
import { useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState(false);
  const Router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token") === "token") {
      setToken(true);
      Router.push("/Dashboard/Mydashboard");
    } else {
      setToken(false);
      Router.push("/Login/Loginpage");
    }
  }, []);

  return (
    <>
      {token === true ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      )}
    </>
  );
}
