"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, GraduationCap } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)

  const socialLinks = [
    { name: 'Github', username: '@Pulakpj9', icon: Github, url: 'https://github.com/Pulakpj9' },
    { name: 'Linkedin', username: '@Pulakpj9', icon: Linkedin, url: 'https://www.linkedin.com/in/pulak-jain-aa1053203/' },
    { name: 'Google Scholar', username: '@Pulakpj9', icon: GraduationCap, url: 'https://scholar.google.com/citations?user=WdzmqEwAAAAJ&hl=en' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
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
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            {isSocialsOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-gray-900 rounded-xl shadow-lg py-1 border border-gray-700">
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
                    <span className="text-xs text-gray-500 font-mono">{social.username}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Logo */}
        <a href="/" className="text-xl font-bold h-10 w-32 flex items-center">
          ./PJ
        </a>

        {/* Resume Button */}
        <Button variant="secondary" size="sm" className="hidden md:flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Resume
        </Button>

        {/* Mobile Menu Button - Absolutely Positioned */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu - Now Absolutely Positioned */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 py-2 shadow-lg z-40">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Experience</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Work</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Skills</a>
          <div className="px-4 py-2">
            <span className="block text-sm font-medium mb-2">Socials</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex items-center justify-between py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                <div className="flex items-center">
                  <social.icon className="w-5 h-5" />
                  <span className="ml-2">{social.name}</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">{social.username}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}