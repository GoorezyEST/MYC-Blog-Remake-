import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/modules/thumbnails.module.css";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "@/functions/AppState";
import Link from "next/link";

type JSONObject = {
  data: {
    articles: {
      title: string;
      img: string;
      alt: string;
      description: string;
      date: string;
      link: string;
    }[];
  };
};

type DataArray = {
  title: string;
  img: string;
  alt: string;
  description: string;
  date: string;
  link: string;
}[];

export default function renderThumbnails(data: JSONObject) {
  const jsonData = [...data.data.articles].reverse();
  const [filteredData, setFilteredData] = useState<DataArray>(jsonData);
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<DataArray>([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const thumbnailsRef = useRef<HTMLElement>(null);
  const { searchTerm } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState<Boolean>(false);

  const handleImageLoad = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  useEffect(() => {
    setLoading(true);
    setCounter(0);
  }, [page]);

  useEffect(() => {
    if (counter !== 0) setLoading(false);
  }, [counter]);

  useEffect(() => {
    if (Array.isArray(filteredData)) {
      const start: number = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setPaginatedData(filteredData.slice(start, end));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [filteredData, page, searchTerm, itemsPerPage]);

  useEffect(() => {
    if (Array.isArray(jsonData)) {
      const filteredArray = jsonData.filter((item) => {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        const term = searchTerm.toLowerCase();
        return title.includes(term) || description.includes(term);
      });
      setFilteredData(filteredArray);
      setPage(1);
    }
  }, [searchTerm]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 475);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(8);
    }
  }, [isMobile]);

  return (
    <>
      <section ref={thumbnailsRef} className={styles.content}>
        {paginatedData && paginatedData.length > 0 ? (
          paginatedData.map((item, index) => {
            return (
              <Link className={styles.card} key={index} href={item.link}>
                <div className={styles.img}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(maxwidth: 1000) 300px, 150px"
                    onLoad={() => handleImageLoad()}
                  />
                  {loading && (
                    <div className={styles.loadingContainer}>
                      <span></span>
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <span className={styles.title}>{item.title}</span>
                  <p className={styles.text}>{item.description}</p>
                  <span className={styles.date}>{item.date}</span>
                </div>
              </Link>
            );
          })
        ) : (
          <div className={styles.notfound}>
            <span>Ups!</span>
            <p>Ningun artículo coincide con tu busqueda.</p>
          </div>
        )}
      </section>
      {paginatedData.length > 0 && (
        <div className={styles.pagination}>
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(1);
            }}
            className={styles.paginationBtn}
          >
            <FaAngleDoubleLeft className={styles.paginationBtnImg} />
          </button>
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
            className={styles.paginationBtn}
          >
            <FaAngleLeft className={styles.paginationBtnImg} />
          </button>
          <p>{page}</p>
          <button
            disabled={page === Math.ceil(filteredData.length / itemsPerPage)}
            onClick={() => {
              setPage(page + 1);
            }}
            className={styles.paginationBtn}
          >
            <FaAngleRight className={styles.paginationBtnImg} />
          </button>
          <button
            disabled={page === Math.ceil(filteredData.length / itemsPerPage)}
            onClick={() => {
              setPage(Math.ceil(filteredData.length / itemsPerPage));
            }}
            className={styles.paginationBtn}
          >
            <FaAngleDoubleRight className={styles.paginationBtnImg} />
          </button>
        </div>
      )}
    </>
  );
}
