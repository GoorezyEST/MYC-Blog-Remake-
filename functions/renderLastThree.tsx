import React from "react";
import data from "@/data/thumbnails.json";
import Image from "next/image";
import styles from "@/styles/modules/lastestarticles.module.css";
import Link from "next/link";
import { RiNavigationFill } from "react-icons/ri";

export default function RenderLastThree() {
  const lastThreeThumbnails = data.articles.slice(-3).reverse();

  return (
    <>
      {lastThreeThumbnails &&
        lastThreeThumbnails.map((item, index) => {
          let url = item.link.replace("articulos", ".");
          return (
            <div key={index} className={styles.card}>
              <div className={styles.img}>
                <Image
                  src={item?.img}
                  alt={item?.alt}
                  fill
                  unoptimized={true}
                />
                <div className={styles.info}>
                  <span className={styles.title}>{item?.title}</span>
                  <Link href={url}>
                    <RiNavigationFill className={styles.button} />
                  </Link>
                  <span className={styles.date}>{item?.date}</span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
