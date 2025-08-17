"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, GraduationCap, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const socialLinks = [
    {
      name: "Github",
      username: "@Pulakpj9",
      icon: Github,
      url: "https://github.com/Pulakpj9",
    },
    {
      name: "Linkedin",
      username: "@Pulakpj9",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/pulak-jain-aa1053203/",
    },
    {
      name: "Google Scholar",
      username: "@Pulakpj9",
      icon: GraduationCap,
      url: "https://scholar.google.com/citations?user=WdzmqEwAAAAJ&hl=en",
    },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/Pulak_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-[#0a0a0a]/80 text-white border-b-[0.5px] border-[#ffffff1c] transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#experience"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Experience
          </a>
          <a
            href="#work"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Work
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Skills
          </a>
          <a
            href="#research"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Research
          </a>

          <div className="relative">
            <Button
              variant="ghost"
              className="text-sm font-medium flex items-center hover:bg-transparent hover:text-gray-300 px-2"
              onClick={() => setIsSocialsOpen(!isSocialsOpen)}
            >
              Socials
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isSocialsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>

            <AnimatePresence>
              {isSocialsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-60 bg-[#242424] rounded-xl shadow-lg py-1 border border-gray-700"
                >
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center">
                        <social.icon className="w-5 h-5" />
                        <span className="ml-2">{social.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">
                        {social.username}
                      </span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Logo */}
        <div className="flex-1 flex md:flex-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <a href="/" className="text-xl font-bold h-full flex">
            ./PJ
          </a>
        </div>

        {/* Resume + Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <Button
            onClick={handleResumeDownload}
            className="h-9 px-4 rounded-md bg-transparent border border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all flex items-center gap-2 group"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </Button>

          {/* Hamburger (Mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121212] border-t border-gray-800 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <a
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#work"
              >
                Work
              </a>
              <a
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#research"
              >
                Research
              </a>
              <div className="mt-2 pt-4 border-t border-gray-700 space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white py-1.5 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                    <div>
                      <div className="text-sm">{social.name}</div>
                      <div className="text-xs text-gray-500 font-mono">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
