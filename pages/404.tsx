import React from "react";
import CustomHead from "@/components/CustomHead";
import styles from "@/styles/modules/404.module.css";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

type HeaderData = {
  title: string;
  description: string;
  image: string;
};

export default function Custom404() {
  const metaData: HeaderData = {
    title: "Error 404: Página no encontrada",
    description:
      "Esta dirección URL no coincide con ninguna perteneciente a Mate y Código.",
    image: "https://i.imgur.com/VsMFUop.png",
  };

  return (
    <>
      <CustomHead obj={metaData} />
      <section className={styles.content}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className={styles.items}
        >
          <span className={styles.error}>Error 404</span>
          <p className={styles.text}>Esta página no pudo ser encontrada</p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
