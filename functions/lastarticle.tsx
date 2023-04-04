import React from "react";
import data from "@/data/thumbnails.json";
import Image from "next/image";
import styles from "@/styles/modules/lastarticle.module.css";

export default function LastArticle() {
  const lastThumbnail = data.articles[data.articles.length - 1];

  return (
    <>
      <div className={styles.card}>
        {lastThumbnail && (
          <>
            <Image
              src={lastThumbnail?.img}
              alt={lastThumbnail?.alt}
              width={100}
              height={100}
              unoptimized={true}
              className={styles.img}
            />
            <div className={styles.info}>
              <span className={styles.title}>{lastThumbnail?.title}</span>
              <p className={styles.text}>{lastThumbnail?.description}</p>
              <span className={styles.date}>{lastThumbnail?.date}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
