import CustomHead from "@/components/CustomHead";
import Footer from "@/components/Footer";
import styles from "@/styles/modules/contact.module.css";
import { FaLinkedin, FaGithubSquare, FaAt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import meta from "@/data/main-tags.json";
import { useEffect, useState } from "react";

export default function Contacto() {
  const [metaData, setMetaData] = useState({
    page: "",
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    meta.map((item) => {
      if (item.page === "contacto") {
        setMetaData({
          page: item.page,
          title: item.title,
          description: item.description,
          image: item.image,
        });
      }
    });
  }, []);

  return (
    <>
      <CustomHead obj={metaData} />
      <main className={styles.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <h2 className={styles.title}>¡Mis redes!</h2>
        </motion.div>

        <div className={styles.buttons}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              type: "spring",
              duration: 0.75,
            }}
          >
            <Link
              href="https://www.linkedin.com/in/franco-espinosa/"
              target="_blank"
              className={`${styles.btn} ${styles.btnLinkedin}`}
            >
              <FaLinkedin className={`${styles.icon} ${styles.iconLinkedin}`} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              type: "spring",
              duration: 0.75,
            }}
          >
            <Link
              href="https://github.com/GoorezyEST"
              target="_blank"
              className={`${styles.btn} ${styles.btnGithub}`}
            >
              <FaGithubSquare
                className={`${styles.icon} ${styles.iconGithub}`}
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.25,
              type: "spring",
              duration: 0.75,
            }}
          >
            <Link
              href="mailto:francoespinosa.dev@gmail.com"
              target="_blank"
              className={`${styles.btn} ${styles.btnMail}`}
            >
              <FaAt className={`${styles.icon} ${styles.iconMail}`} />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
          className={styles.email}
        >
          <p>Si necesitás mi email</p>
          <span>francoespinosa.dev@gmail.com</span>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
