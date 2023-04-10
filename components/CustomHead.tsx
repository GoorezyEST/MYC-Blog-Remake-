import Head from "next/head";
import React from "react";

type Props = {
  obj: {
    title: string;
    description: string;
    image: string;
  };
};

export default function CustomHead({ obj }: Props) {
  return (
    <>
      <Head>
        <title>{obj.title}</title>
        <meta name="description" content={obj.description} />

        <meta property="og:title" content={obj.title} />
        <meta property="og:description" content={obj.description} />
        <meta property="og:image" itemProp="image" content={obj.image} />
        <meta property="og:site_name" content="Mate y Código" />
        <meta property="og:type" content="website" />

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
