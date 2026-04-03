"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface HighlightTextOnScrollProps {
  children: string
  className?: string
  scrollStart?: string
  scrollEnd?: string
  fadedOpacity?: number
  staggerAmount?: number
}

export function HighlightTextOnScroll({
  children,
  className,
  scrollStart = "top 80%",
  scrollEnd = "top 20%",
  fadedOpacity = 0.15,
  staggerAmount = 0.1,
}: HighlightTextOnScrollProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return

    const text = typeof children === "string" ? children : ""
    heading.innerHTML = ""

    const chars: HTMLSpanElement[] = []

    text.split(" ").forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span")
      wordSpan.style.display = "inline-block"

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span")
        charSpan.textContent = char
        charSpan.style.display = "inline-block"
        wordSpan.appendChild(charSpan)
        chars.push(charSpan)
      })

      heading.appendChild(wordSpan)

      if (wordIndex < text.split(" ").length - 1) {
        const spaceSpan = document.createElement("span")
        spaceSpan.innerHTML = "&nbsp;"
        heading.appendChild(spaceSpan)
      }
    })

    heading.setAttribute("aria-label", text)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      })

      tl.from(chars, {
        autoAlpha: fadedOpacity,
        stagger: staggerAmount,
        ease: "linear",
      })
    }, heading)

    return () => {
      ctx.revert()
    }
  }, [children, scrollStart, scrollEnd, fadedOpacity, staggerAmount])

  return (
    <h1
      ref={headingRef}
      className={cn(
        "mx-auto max-w-[60rem] text-center text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.3]",
        className,
      )}
    >
      {children}
    </h1>
  )
}
