import { useRouter } from "next/router";
import data from "@/data/articles.json";
import renderElement from "../../../functions/renderElement";
import styles from "@/styles/modules/articles.module.css";
import Link from "next/link";
import RenderLastThree from "@/functions/renderLastThree";
import Image from "next/image";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  let art;

  data.articles.map((item) => {
    if (item[1].url === id) {
      art = item;
      return;
    }
  });

  return (
    <>
      <section className={styles.content}>
        <div className={styles.article}>
          {art?.map((item, index) => {
            let renderedElements = [];
            Object.values(item).forEach((innerItem, innerIndex) => {
              Object.values(innerItem).forEach((element, elementIndex) => {
                renderedElements.push(renderElement(element, elementIndex));
              });
            });
            return renderedElements;
          })}
        </div>
        <div className={styles.lastest}>
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
        </div>
      </section>
      <footer className={styles.footer}>
        <span>Mate y código</span>
        <strong>¡Muchas gracias por leer!</strong>
        <p>Argentina 2023</p>
      </footer>
    </>
  );
}
