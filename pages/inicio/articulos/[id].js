import { useRouter } from "next/router";
import data from "@/data/articles.json";
import renderElement from "../../../functions/renderElement";
import styles from "@/styles/modules/articles.module.css";
import Link from "next/link";
import RenderLastThree from "@/functions/renderLastThree";
import { motion } from "framer-motion";
import Image from "next/image";
import { GetServerSideProps } from "next";
import CustomHead from "@/components/CustomHead";
import meta from "@/data/articles-tags.json";

export async function GetServerSideProps() {
  const router = useRouter();
  const { id } = router.query;

  let data = {
    title: "",
    description: "",
    image: "",
  };

  data.articles.map((item) => {
    if (item[1].url === id) {
      data = item;
      return;
    }
  });

  meta.forEach((item) => {
    if (data !== null) {
      if (item.url === data[1].url) {
        data = {
          title: item.title,
          description: item.description,
          image: item.image,
        };
      }
    }
  });

  return {
    props: {
      data,
    },
  };
}

export default function Article(props) {
  let art;

  data.articles.map((item) => {
    if (item[1].url === id) {
      art = item;
      return;
    }
  });

  return (
    <>
      <CustomHead obj={props.data} />
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
          {art?.map((item, index) => {
            let renderedElements = [];
            Object.values(item).forEach((innerItem, innerIndex) => {
              Object.values(innerItem).forEach((element, elementIndex) => {
                renderedElements.push(renderElement(element, elementIndex));
              });
            });
            return renderedElements;
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
