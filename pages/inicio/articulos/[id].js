import { useRouter } from "next/router";
import data from "@/data/articles.json";
import renderElement from "../../../functions/renderElement";
import styles from "@/styles/modules/articles.module.css";
import Link from "next/link";
import RenderLastThree from "@/functions/renderLastThree";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import CustomHead from "@/components/CustomHead";
import meta from "@/data/articles-tags.json";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
    url: "",
    image: "",
  });

  let art = null;

  data.articles.map((item) => {
    if (item[1].url === id) {
      art = item;
      return;
    }
  });

  useEffect(() => {
    meta.forEach((item) => {
      if (art !== null) {
        if (item.url === art[1].url) {
          setMetaData(item);
        }
      }
    });
  }, [art]);

  return (
    <>
      <CustomHead obj={metaData} />
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
