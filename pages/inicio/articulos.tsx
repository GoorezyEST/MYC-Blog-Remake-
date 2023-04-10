import React from "react";
import CustomHead from "@/components/CustomHead";
import meta from "@/data/main-tags.json";
import thumbnails from "@/data/thumbnails.json";
import RenderThumbnails from "@/functions/renderThumbnails";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";

type MetaTags = {
  title: string;
  description: string;
  image: string;
};

export default function Articulos({ obj }: Props) {
  return (
    <>
      <CustomHead obj={obj} />
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

interface Props {
  obj: MetaTags;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let metaTags: MetaTags = {
    title: "",
    description: "",
    image: "",
  };

  meta.map((item) => {
    if (item.page === "articulos") {
      metaTags = {
        title: item.title,
        description: item.description,
        image: item.image,
      };
    }
  });

  return {
    props: {
      obj: metaTags,
    },
  };
};
