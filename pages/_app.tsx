import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import styles from "@/styles/modules/loader.module.css";
import type { AppProps } from "next/app";
import { AppStateProvider } from "@/functions/AppState";
import { useEffect, useState } from "react";
import { Router } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <AppStateProvider>
        <Navbar />
        {loading ? (
          <div className={styles.container}>
            <span className={styles.loader}></span>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </AppStateProvider>
    </>
  );
}
