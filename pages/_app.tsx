import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppStateProvider } from "@/functions/AppState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppStateProvider>
        <Navbar />

        <Component {...pageProps} />
      </AppStateProvider>
    </>
  );
}
