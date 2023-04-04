import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import LastArticle from "@/functions/lastarticle";
import { BiChevronsDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>MYC - Inicio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.welcome_main}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
          }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          className={styles.welcome_section}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.75,
          }}
        >
          <div className={styles.welcome_text}>
            <h1 className={styles.welcome_title}>Mate y código</h1>
            <div className={styles.welcome_anim}>
              <p className={styles.welcome_slogan}>Un lugar donde puedes</p>
              <div className={styles.multi_content}>
                <div className={styles.multi_words}>
                  <span className={styles.wordAnim}>Aprender</span>
                  <span className={styles.wordAnim}>Descubrir</span>
                  <span className={styles.wordAnim}>Informarte</span>
                  <span className={styles.wordAnim}>Investigar</span>
                  <span className={styles.wordAnim}>Aprender</span>
                </div>
              </div>
            </div>
          </div>
          <BiChevronsDown
            className={styles.welcome_down}
            style={{ opacity: show ? 1 : 0 }}
          />
        </motion.div>

        <section className={styles.welcome_lastart}>
          <motion.div
            initial={{ opacity: 0, marginRight: 300 }}
            whileInView={{ opacity: 1, marginRight: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
          >
            <span className={styles.welcome_lastspan}>
              Mira nuestro último artículo
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: 300 }}
            whileInView={{ opacity: 1, marginLeft: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
          >
            <LastArticle />
          </motion.div>
        </section>
      </main>
    </>
  );
}