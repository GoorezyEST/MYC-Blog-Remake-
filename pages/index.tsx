import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/inicio");
  }, []);

  return <div />;
}
