import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "@/styles/modules/faqbox.module.css";

type Faq = {
  question: string;
  answer: string;
  open: boolean;
};

type Props = {
  faq: Faq;
  index: number;
  toggleFAQ: (index: number) => void;
};

export default function FAQBox({ faq, index, toggleFAQ }: Props) {
  return (
    <div
      className={faq.open ? `${styles.open} ${styles.faq}` : styles.faq}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={styles.faq_question}>{faq.question}</div>
      <div className={styles.faq_answer}>{faq.answer}</div>
    </div>
  );
}
