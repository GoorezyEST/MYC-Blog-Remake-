import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/modules/navbar.module.css";
import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 475);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function checkNavCondition(): boolean {
    if (router.pathname === "/inicio/articulos" && isMobile) {
      return false;
    }
    return true;
  }

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navlogo} href="/inicio">
        <Image
          src="https://svgshare.com/i/rjT.svg"
          alt="Mate y código logo"
          fill
          sizes="(max-width: 850px) 32px, 64px"
          priority
        />
      </Link>
      <ul className={styles.navul}>
        <Link
          href="/inicio"
          className={router.pathname === "/inicio" ? styles.activeLink : ""}
        >
          Inicio
        </Link>
        {checkNavCondition() && (
          <>
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
              className={
                router.pathname === "/contacto" ? styles.activeLink : ""
              }
            >
              Contacto
            </Link>
          </>
        )}
      </ul>
      <div
        className={
          router.pathname === "/inicio/articulos" ? styles.dummynav : "hideLink"
        }
      >
        {router.pathname === "/inicio/articulos" && (
          <motion.div
            className={styles.navsearch}
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <input
              type="text"
              className={styles.navinput}
              placeholder="Busca artículos..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <BiSearchAlt2 className={styles.navsearchlogo} />
          </motion.div>
        )}
      </div>
    </nav>
  );
}
