import styles from "@/styles/modules/Home.module.css";
import LastArticle from "@/functions/lastarticle";
import { BiChevronsDown } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FAQBox from "@/functions/FAQBox";
import Footer from "@/components/Footer";
import CustomHead from "@/components/CustomHead";
import { GetServerSideProps } from "next";
import meta from "@/data/main-tags.json";

type Faq = {
  question: string;
  answer: string;
  open: boolean;
};

type MetaTags = {
  title: string;
  description: string;
  image: string;
};

export default function Home({ obj }: Props) {
  const [show, setShow] = useState(false);
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [faqs, setFaqs] = useState<Faq[]>([
    {
      question: "¿Cuál es el propósito de este sitio web?",
      answer:
        "MYC (Mate y código) se creó con la finalidad de poder almacenar mis conocimientos de forma ordenada y cómoda, y a su vez, poder compartirlo con el resto de la comunidad de desarrolladores de una manera sencilla.",
      open: false,
    },
    {
      question: "¿Qué tecnologías se usaron?",
      answer:
        "Para crear MYC (Mate y código) se utilizó el framework NextJS, junto a herramientas externas para brindar una mejor experiencia al usuario como “react-icons” o “framer-motion.",
      open: false,
    },
    {
      question: "¿Cada cuanto se sube un artículo?",
      answer:
        "En MYC (Mate y código) solo yo me encargo de escribir los artículos, y debido a que estoy estudiando tecnologías nuevas y buscando una oportunidad laboral, no poseo un tiempo libre suficiente para mantener una constancia continua con los artículos. Aún así se suele subir al menos un artículo por mes.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  const handleScrollArrow = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CustomHead obj={obj} />
      <main className={styles.welcome_main}>
        <div className={styles.welcome_section}>
          <div className={styles.welcome_text}>
            <motion.div
              initial={{ opacity: 0, x: "15px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <h1 className={styles.welcome_title}>Mate y código</h1>
            </motion.div>
            <motion.div
              className={styles.welcome_anim}
              initial={{ opacity: 0, x: "-15px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className={styles.welcome_slogan}>Un lugar para</p>
              <div className={styles.multi_content}>
                <motion.div
                  className={styles.multi_words}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.6 }}
                >
                  <span className={styles.wordAnim}>Aprender</span>
                  <span className={styles.wordAnim}>Descubrir</span>
                  <span className={styles.wordAnim}>Informarte</span>
                  <span className={styles.wordAnim}>Investigar</span>
                  <span className={styles.wordAnim}>Aprender</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <BiChevronsDown
            onClick={handleScrollArrow}
            className={styles.welcome_down}
            style={{ opacity: show ? 1 : 0 }}
          />
        </div>

        <section className={styles.welcome_lastart} ref={scrollRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
            className={styles.welcomelastartcontainer}
          >
            <LastArticle />
          </motion.div>
        </section>

        <section className={styles.faq_section}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
          >
            <span className={styles.faq_title}>Preguntas frecuentes</span>
          </motion.div>
          <div className={styles.faq_content}>
            {faqs.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.75,
                    delay: 0.25,
                  }}
                  className={styles.faqdiv}
                >
                  <FAQBox faq={item} index={i} toggleFAQ={toggleFAQ} />
                </motion.div>
              );
            })}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

interface Props {
  obj: MetaTags;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let metaTags: MetaTags = {
    title: "",
    description: "",
    image: "",
  };

  meta.map((item) => {
    if (item.page === "contacto") {
      metaTags = {
        title: item.title,
        description: item.description,
        image: item.image,
      };
    }
  });

  return {
    props: {
      obj: metaTags,
    },
  };
};
