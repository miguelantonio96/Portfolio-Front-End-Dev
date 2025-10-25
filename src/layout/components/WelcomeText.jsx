import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const sideLeftWords = {
  welcomeLetters: ["W", "E", "L", "C", "O", "M", "E"],
  frontendLetters: ["F", "R", "O", "N", "T", "", "E", "N", "D"],
};

export const WelcomeText = () => {
  const { currentArticleTitle } = useSelector((state) => state.portfolio);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (currentArticleTitle === "Home") {
      setLetters(sideLeftWords.welcomeLetters);
    } else {
      setLetters(sideLeftWords.frontendLetters);
    }
  }, [currentArticleTitle]);

  return (
    <div className="welcome-text-container">
      <AnimatePresence>
        {letters.map((letter, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: 1,
              //
              // y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              delay: idx * 0.3,
              ease: "easeInOut",
              repeat: Infinity,
              //   repeatType: "reverse",
            }}
          >
            {letter === "" ? "\u00A0" : letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};
