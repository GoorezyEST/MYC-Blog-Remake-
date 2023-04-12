import React from "react";
import data from "@/data/articles.json";
import renderElement from "../../../functions/renderElement";
import styles from "@/styles/modules/articles.module.css";
import Link from "next/link";
import RenderLastThree from "@/functions/renderLastThree";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomHead from "@/components/CustomHead";
import meta from "@/data/articles-tags.json";
import { GetServerSideProps } from "next";

export default function Article({ metaTags, articleToMap }: Props) {
  return (
    <>
      <CustomHead obj={metaTags} />
      <section className={styles.content}>
        <motion.div
          className={styles.article}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.25,
          }}
        >
          {articleToMap.content.map((item: Content, index: number) => {
            return renderElement(item, index);
          })}
        </motion.div>
        <motion.div
          className={styles.lastest}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.25,
          }}
        >
          <Link href={"../articulos"} scroll={true} className={styles.return}>
            Regresar
          </Link>
          <div className={styles.lastestArts} id="element">
            <h4 className={styles.title}>Artículos recientes</h4>
            <RenderLastThree />
          </div>
          <div className={styles.lastestIcon}>
            <Image
              src="https://svgshare.com/i/rjT.svg"
              alt="Mate y código logo"
              fill
            />
          </div>
        </motion.div>
      </section>
      <footer className={styles.footer}>
        <span>Mate y código</span>
        <strong>¡Muchas gracias por leer!</strong>
        <p>Argentina 2023</p>
      </footer>
    </>
  );
}

interface Props {
  metaTags: MetaTags;
  articleToMap: Article;
}

type MetaTags = {
  title: string;
  description: string;
  image: string;
};

interface Article {
  content: Content[];
}

interface Content {
  title?: Title;
  text?: Text;
  img?: Img;
  link?: Link;
}

interface Img {
  src: string;
  alt: string;
}

interface Link {
  title: string;
  link: string;
}

interface Text {
  title: string;
  text: string;
}

interface Title {
  title: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { id } = context.query;

  let metaData: MetaTags = {
    title: "",
    description: "",
    image: "",
  };

  let article: Article = {
    content: [],
  };

  data.articles.map((item) => {
    if (item[1].url === id) {
      const content = item[2].content;
      if (Array.isArray(content)) {
        article = { content };
      }
      return;
    }
  });

  meta.map((item) => {
    if (item.url === id) {
      metaData = {
        title: item.title,
        description: item.description,
        image: item.image,
      };
    }
  });

  return {
    props: {
      metaTags: metaData,
      articleToMap: article,
    },
  };
};
