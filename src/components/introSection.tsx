"use client"

import { useEffect, useRef } from 'react'
import Avatar from "../assets/avatar.svg"

export default function IntroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeText = () => {
      const content = contentRef.current
      if (!content) return

      const containerWidth = content.offsetWidth
      const containerHeight = content.offsetHeight

      // Start with a base font size and adjust
      let fontSize = 1
      content.style.fontSize = `${fontSize}px`

      // Increase font size until content exceeds container dimensions
      while (content.scrollHeight <= containerHeight && content.scrollWidth <= containerWidth) {
        fontSize++
        content.style.fontSize = `${fontSize}px`
      }

      // Step back to ensure content fits
      fontSize--
      content.style.fontSize = `${fontSize}px`

      // If content still overflows height, reduce font size further
      while (content.scrollHeight > containerHeight) {
        fontSize--
        content.style.fontSize = `${fontSize}px`
      }

      // Set line height based on font size
      const lineHeight = Math.max(1.2, Math.min(1.5, 30 / fontSize))
      content.style.lineHeight = `${lineHeight}`
    }

    resizeText()
    window.addEventListener('resize', resizeText)

    return () => window.removeEventListener('resize', resizeText)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black text-white h-[90.7vh] flex items-center justify-center">
      <div className="w-full h-full max-w-[80vw] flex items-center justify-center">
        <div ref={contentRef} className="w-full h-[80%] flex flex-col justify-center items-start overflow-hidden space-y-[0.5em]">
          <p className="font-light flex items-center flex-wrap">
            <span className="inline-flex items-center">
              Hey
              <img src={Avatar} className="w-[1em] h-[1em] ml-2 inline-block"/>
            </span>
          </p>
          <p className="font-light">
            I am <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">pulakJain</span>
          </p>
          <p className="font-light">Your Go → To</p>
          <p className="font-light">Human Software Eng.</p>
        </div>
      </div>
    </div>
  )
}