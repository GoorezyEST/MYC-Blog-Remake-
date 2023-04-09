import React from "react";
import data from "@/data/thumbnails.json";
import Image from "next/image";
import styles from "@/styles/modules/lastarticle.module.css";
import Link from "next/link";

export default function LastArticle() {
  const lastThumbnail = data.articles[data.articles.length - 1];

  return (
    <>
      <Link className={styles.card} href={"inicio/" + lastThumbnail.link}>
        {lastThumbnail && (
          <>
            <div className={styles.img}>
              <Image
                src={lastThumbnail?.img}
                alt={lastThumbnail?.alt}
                fill
                sizes="(max-width: 525px) 300px, 150px"
                unoptimized={true}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.title}>{lastThumbnail?.title}</span>
              <p className={styles.text}>{lastThumbnail?.description}</p>
              <span className={styles.date}>{lastThumbnail?.date}</span>
            </div>
          </>
        )}
      </Link>
    </>
  );
}
