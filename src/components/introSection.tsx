"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Avatar from "../assets/avatar.svg";
import { ChevronsDown } from "lucide-react";

export default function IntroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScroll = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      // Calculate position with 100px offset
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = experienceSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="intro"
      className="relative h-[92vh] flex items-center justify-center text-white px-6 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center gap-4 z-10 mb-20" // Added mb-20 to push content up
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className="flex items-center gap-2 text-lg md:text-2xl font-light"
        >
          Hey
          <motion.img
            src={Avatar}
            alt="Pulak avatar"
            className="w-10 h-10 md:w-14 md:h-14"
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          />
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-[clamp(3.5rem,10vw,6rem)] font-extrabold leading-tight tracking-tight"
        >
          I am{" "}
          <span
            className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 
                       bg-clip-text text-transparent"
          >
            Pulak Jain
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-[clamp(1.5rem,3vw,2.3rem)] font-medium text-cyan-400"
        >
          Your Go → To
        </motion.p>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-[clamp(1.5rem,3vw,2.3rem)] font-medium text-pink-400"
        >
          Human Software Engineer
        </motion.p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        onClick={handleScroll}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 flex flex-col items-center"
        >
          <ChevronsDown className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
