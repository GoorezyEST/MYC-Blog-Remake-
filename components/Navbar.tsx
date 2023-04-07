import React from "react";
import Image from "next/image";
import styles from "@/styles/modules/navbar.module.css";
import Link from "next/link";
import { FcSearch } from "react-icons/fc";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "@/functions/AppState";
import { motion } from "framer-motion";

export default function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <Image
        src="https://svgshare.com/i/rjT.svg"
        alt="Mate y código logo"
        width={64}
        height={64}
        priority
        className={styles.navlogo}
      />
      <ul className={styles.navul}>
        <Link
          href="/inicio"
          className={router.pathname === "/inicio" ? styles.activeLink : ""}
          scroll={false}
        >
          Inicio
        </Link>
        <Link
          href="/inicio/articulos"
          className={
            router.pathname === "/inicio/articulos" ? styles.activeLink : ""
          }
          scroll={false}
        >
          Artículos
        </Link>
        <Link
          href="/contacto"
          className={router.pathname === "/contacto" ? styles.activeLink : ""}
          scroll={false}
        >
          Contacto
        </Link>
      </ul>
      <div className={styles.dummynav}>
        {router.pathname === "/inicio/articulos" && (
          <motion.div
            className={styles.navsearch}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.45,
            }}
          >
            <input
              type="text"
              className={styles.navinput}
              placeholder="Busca artículos aquí ..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <FcSearch className={styles.navsearchlogo} />
          </motion.div>
        )}
      </div>
    </nav>
  );
}
