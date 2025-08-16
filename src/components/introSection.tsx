"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Avatar from "../assets/avatar.svg";

export default function IntroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  // === resize text logic stays ===
  useEffect(() => {
    const resizeText = () => {
      const content = contentRef.current;
      if (!content) return;

      const containerWidth = content.offsetWidth;
      const containerHeight = content.offsetHeight;

      let fontSize = 1;
      content.style.fontSize = `${fontSize}px`;

      while (
        content.scrollHeight <= containerHeight &&
        content.scrollWidth <= containerWidth
      ) {
        fontSize++;
        content.style.fontSize = `${fontSize}px`;
      }

      fontSize--;
      content.style.fontSize = `${fontSize}px`;

      while (content.scrollHeight > containerHeight) {
        fontSize--;
        content.style.fontSize = `${fontSize}px`;
      }

      const lineHeight = Math.max(1.2, Math.min(1.5, 30 / fontSize));
      content.style.lineHeight = `${lineHeight}`;
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => window.removeEventListener("resize", resizeText);
  }, []);

  // === Animation Variants ===
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.5 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }, // easeOut curve
    },
  };

  return (
    <div className="text-white h-[91vh] flex items-center justify-center relative z-10" id='intro'>
      <div className="w-full h-full max-w-[80vw] flex items-center justify-center">
        <motion.div
          ref={contentRef}
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full h-[80%] flex flex-col items-start overflow-hidden space-y-[0.5em]"
        >
          {/* Hey + Avatar */}
          <motion.p
            variants={item}
            className="font-light flex items-center flex-wrap"
          >
            <span className="inline-flex items-baseline">
              Hey
              <motion.img
                src={Avatar}
                className="w-[40%] ml-[5%] inline-block"
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // easeOut
                  delay: 0.3,
                }}
              />
            </span>
          </motion.p>

          {/* I am Pulak Jain */}
          <motion.p variants={item} className="font-light">
            I am{" "}
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(90deg, #00f5ff, #ff00ff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              pulakJain
            </span>
          </motion.p>

          {/* Go → To */}
          <motion.p variants={item} className="font-light text-cyan-400">
            Your Go → To
          </motion.p>

          {/* Human Software Eng. */}
          <motion.p variants={item} className="font-light text-pink-400">
            Human Software Eng.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
