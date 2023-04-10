import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  obj: {
    page: string;
    title: string;
    description: string;
    image: string;
  };
};

export default function CustomHead({ obj }: Props) {
  const route = useRouter();

  return (
    <>
      <Head>
        <title>{obj.title}</title>
        <meta name="description" content={obj.description} />

        <meta property="og:title" content="Mate y Código" />
        <meta property="og:description" content="12345" />
        <meta property="og:image" content="https://i.imgur.com/mnEdwzR.png" />
        <meta property="og:url" content={route.pathname} />
        <meta property="og:site_name" content="Mate y Código" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
}
