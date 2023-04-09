import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/modules/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.footer_first}>
        <span>Navegar</span>
        <hr className={styles.hr} />
        <Link href="/inicio" className={styles.link}>
          Inicio
        </Link>
        <Link href="/inicio/articulos" className={styles.link}>
          Artículos
        </Link>
        <Link href="/contacto" className={styles.link}>
          Contacto
        </Link>
      </div>
      <div className={styles.footer_second}>
        <span>Información</span>
        <hr className={styles.hr} />
        <p>MYC: Blog de tecnología y programación.</p>
        <p>Desarrollado por Goorezy.</p>
        <p>Argentina - 2023</p>
      </div>
      <div className={styles.footer_third}>
        <Image
          src="https://svgshare.com/i/rjT.svg"
          alt="Mate y código logo"
          fill
          sizes="(max-width: 850px) 32px, 64px"
        />
      </div>
    </footer>
  );
}
