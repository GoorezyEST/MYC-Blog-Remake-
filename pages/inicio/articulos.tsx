import React, { useEffect, useState } from "react";
import CustomHead from "@/components/CustomHead";
import meta from "@/data/main-tags.json";
import thumbnails from "@/data/thumbnails.json";
import RenderThumbnails from "@/functions/renderThumbnails";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Articulos() {
  const [metaData, setMetaData] = useState({
    page: "",
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    meta.map((item) => {
      if (item.page === "articulos") {
        setMetaData({
          page: item.page,
          title: item.title,
          description: item.description,
          image: item.image,
        });
      }
    });
  }, []);

  return (
    <>
      <CustomHead obj={metaData} />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
          }}
        >
          <RenderThumbnails data={thumbnails} />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
