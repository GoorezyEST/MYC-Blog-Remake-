import React from "react";
import Image from "next/image";
import styles from "@/styles/modules/navbar.module.css";
import Link from "next/link";
import { FcSearch } from "react-icons/fc";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Image
        src="https://svgshare.com/i/rjT.svg"
        alt="Mate y código logo"
        width={64}
        height={64}
        className={styles.navlogo}
      />
      <ul className={styles.navul}>
        <Link
          href="/inicio"
          className={router.pathname === "/inicio" ? styles.activeLink : ""}
        >
          Inicio
        </Link>
        <Link
          href="/inicio/articulos"
          className={
            router.pathname === "/inicio/articulos" ? styles.activeLink : ""
          }
        >
          Artículos
        </Link>
        <Link
          href="/contacto"
          className={router.pathname === "/contacto" ? styles.activeLink : ""}
        >
          Contacto
        </Link>
      </ul>
      <div className={styles.navsearch}>
        <input
          type="text"
          className={styles.navinput}
          placeholder="Busca artículos aquí ..."
        />
        <FcSearch className={styles.navsearchlogo} />
      </div>
    </nav>
  );
}
