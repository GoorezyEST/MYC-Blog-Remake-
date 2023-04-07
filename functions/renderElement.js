import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "@/styles/modules/elements.module.css";
import Link from "next/link";
import Image from "next/image";

const renderElement = (item, index) => {
  if (item.hasOwnProperty("text")) {
    return (
      <div key={index}>
        <h3 className={styles.subtitle}>{item.text.title}</h3>
        <p className={styles.text}>{item.text.text}</p>
      </div>
    );
  } else if (item.hasOwnProperty("title")) {
    return (
      <h2 className={styles.title} key={index}>
        {item.title.title}
      </h2>
    );
  } else if (item.hasOwnProperty("link")) {
    return (
      <Link
        href={item.link.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
        data-back="Llévame"
        data-front={item.link.title}
        key={index}
      ></Link>
    );
  } else if (item.hasOwnProperty("img")) {
    return (
      <div className={styles.img} key={index}>
        <Image
          src={item.img.src}
          alt={item.img.alt}
          fill
          sizes="(max-width: 600px) 50vw,
        80vw"
        />
      </div>
    );
  } else if (item.hasOwnProperty("code")) {
    return (
      <SyntaxHighlighter
        className={styles.code}
        language={item.code.language}
        style={atomDark}
        key={index}
      >
        {item.code.code}
      </SyntaxHighlighter>
    );
  }
};

export default renderElement;
