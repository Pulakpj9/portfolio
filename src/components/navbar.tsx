"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);

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

  return (
    <header
      className="sticky top-0 z-4 w-full bg-transparent text-white border-b-[0.5px] border-[#ffffff1c]"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <span className="text-sm font-medium">Experience</span>
          <span className="text-sm font-medium">Work</span>
          <span className="text-sm font-medium">Skills</span>
          <div className="relative">
            <Button
              variant="ghost"
              className="text-sm font-medium"
              onClick={() => setIsSocialsOpen(!isSocialsOpen)}
            >
              Socials
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
            {isSocialsOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-[#242424] rounded-xl shadow-lg py-1 border border-gray-700">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
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
              </div>
            )}
          </div>
        </nav>

        {/* Logo */}
        <div className="flex-1 flex md:flex-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <a
            href="/"
            className="text-xl font-bold h-full flex"
          >
            ./PJ
          </a>
        </div>

        {/* Resume Button */}
        <div className="flex items-center">
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center border-[1.5px] border-[#909090] p-[18px] rounded-[6px] bg-[#000000] hover:bg-[#333333] hover:text-white transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
            Resume
          </Button>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-4"
            onClick={() => {/* Toggle mobile menu */}}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}