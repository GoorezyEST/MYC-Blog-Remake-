import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppStateProvider } from "@/functions/AppState";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleExitAnimation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppStateProvider>
        <Navbar />
        <AnimatePresence mode="wait" onExitComplete={handleExitAnimation}>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            className="base-page-size"
            transition={{
              duration: 0.75,
              delay: 0.15,
              type: "spring",
            }}
            variants={{
              initialState: {
                opacity: 0,
                y: -50,
              },
              animateState: {
                opacity: 1,
                y: 0,
              },
              exitState: {
                opacity: 0,
                y: 50,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </AppStateProvider>
    </>
  );
}
