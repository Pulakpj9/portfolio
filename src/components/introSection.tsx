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

      while (content.scrollHeight <= containerHeight && content.scrollWidth <= containerWidth) {
        fontSize++
        content.style.fontSize = `${fontSize}px`
      }

      // Step back once to ensure it fits
      fontSize--
      content.style.fontSize = `${fontSize}px`
    }

    resizeText()
    window.addEventListener('resize', resizeText)

    return () => window.removeEventListener('resize', resizeText)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black text-white h-[90vh] flex items-center justify-center">
      <div className="w-full h-full max-w-[80vw] flex items-center justify-center">
        <div ref={contentRef} className="w-full h-[80%] flex flex-col justify-center items-start">
          <p className="font-light flex items-center whitespace-nowrap">
            Hey <img src={Avatar} className="w-[1.6em] h-[1.6em] ml-2"/>
          </p>
          <p className="font-light whitespace-nowrap">
            I am <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">pulakJain</span>
          </p>
          <p className="font-light mt-[0.2em] whitespace-nowrap">Your Go → To</p>
          <p className="font-light whitespace-nowrap">Human Software Eng.</p>
        </div>
      </div>
    </div>
  )
}