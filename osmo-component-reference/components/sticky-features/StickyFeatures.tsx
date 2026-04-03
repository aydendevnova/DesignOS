"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  tag: string
  title: string
  description: string
  linkText?: string
  image: string
}

interface StickyFeaturesProps {
  features: Feature[]
}

export function StickyFeatures({ features }: StickyFeaturesProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const visualWrapsRef = useRef<HTMLDivElement[]>([])
  const textItemsRef = useRef<HTMLDivElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const wrap = wrapRef.current
    const progressBar = progressBarRef.current
    if (!wrap || features.length < 1) return

    const visualWraps = visualWrapsRef.current
    const items = textItemsRef.current
    const count = Math.min(visualWraps.length, items.length)
    if (count < 1) return

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const DURATION = rm ? 0.01 : 0.75
    const EASE = "power4.inOut"
    const SCROLL_PER_STEP = 60

    const getTexts = (el: HTMLElement) =>
      Array.from(el.querySelectorAll("[data-sticky-feature-text]"))

    if (visualWraps[0])
      gsap.set(visualWraps[0], { clipPath: "inset(0% round 0.75em)" })

    let localIndex = 0

    const animateOut = (itemEl: HTMLElement) => {
      const texts = getTexts(itemEl)
      gsap.to(texts, {
        autoAlpha: 0,
        y: -30,
        ease: "power4.out",
        duration: 0.4,
        onComplete: () => { gsap.set(itemEl, { visibility: "hidden" }) },
      })
    }

    const animateIn = (itemEl: HTMLElement) => {
      const texts = getTexts(itemEl)
      gsap.set(itemEl, { visibility: "visible" })
      gsap.fromTo(
        texts,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power4.out",
          duration: DURATION,
          stagger: 0.1,
        },
      )
    }

    const transition = (fromIndex: number, toIndex: number) => {
      if (fromIndex === toIndex) return

      if (fromIndex < toIndex) {
        gsap.to(visualWraps[toIndex]!, {
          clipPath: "inset(0% round 0.75em)",
          duration: DURATION,
          ease: EASE,
        })
      } else {
        gsap.to(visualWraps[fromIndex]!, {
          clipPath: "inset(50% round 0.75em)",
          duration: DURATION,
          ease: EASE,
        })
      }

      animateOut(items[fromIndex]!)
      animateIn(items[toIndex]!)
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: "center center",
        end: () => `+=${count * SCROLL_PER_STEP}%`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress
          let idx = Math.floor(p * count)
          idx = Math.max(0, Math.min(count - 1, idx))

          if (progressBar) {
            gsap.to(progressBar, {
              scaleX: p,
              ease: "none",
            })
          }

          if (idx !== localIndex) {
            transition(localIndex, idx)
            localIndex = idx
            setCurrentIndex(idx)
          }
        },
      })
    }, wrap)

    return () => ctx.revert()
  }, [features])

  const addToVisualWraps = (el: HTMLDivElement | null, index: number) => {
    if (el) visualWrapsRef.current[index] = el
  }

  const addToTextItems = (el: HTMLDivElement | null, index: number) => {
    if (el) textItemsRef.current[index] = el
  }

  return (
    <div ref={wrapRef} className="w-full px-[1.25em] relative" data-sticky-feature-wrap="">
      <div className="flex justify-center items-center h-screen max-md:h-auto max-md:min-h-[100svh] max-md:pt-[1.25em] max-md:pb-[2.5em]">
        <div className="gap-[1.25em] justify-center items-stretch w-full max-w-[70em] mx-auto flex max-md:gap-[2em] max-md:flex-col max-md:justify-start">
          <div className="flex-1 relative overflow-hidden rounded-[0.75em]">
            <div className="w-full">
              <div className="aspect-[1/1.3] w-full relative max-md:aspect-square">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    ref={(el) => addToVisualWraps(el, index)}
                    className={cn(
                      "w-full h-full absolute inset-0",
                      index === 0
                        ? "[clip-path:inset(0%_round_0.75em)]"
                        : "[clip-path:inset(50%_round_0.75em)]"
                    )}
                    data-sticky-feature-visual-wrap=""
                  >
                    <img
                      src={feature.image}
                      className="object-cover w-full h-full"
                      alt={feature.title}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-[0.25em] bg-white/15">
              <div
                ref={progressBarRef}
                className="w-full h-full bg-white [transform:scaleX(0)] origin-left"
                data-sticky-feature-progress=""
              />
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="h-full">
              <div className="flex flex-col justify-center items-start h-full max-h-full relative max-md:min-h-[20em] max-md:max-h-none">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    ref={(el) => addToTextItems(el, index)}
                    className={cn(
                      "gap-[1.5em] flex flex-col justify-center items-start w-full max-w-[27.5em] ml-auto absolute right-0 max-md:max-w-none",
                      index === 0 ? "visible" : "invisible"
                    )}
                    data-sticky-feature-item=""
                  >
                    <span
                      className="bg-white/10 rounded-[0.25em] mb-[1.5em] py-[0.5em] px-[0.625em] text-base leading-none max-md:mb-0"
                      data-sticky-feature-text=""
                    >
                      {feature.tag}
                    </span>
                    <h2
                      className="text-[3.75em] font-medium leading-none max-md:text-[2.5em]"
                      data-sticky-feature-text=""
                    >
                      {feature.title}
                    </h2>
                    <p
                      className="text-white/70 text-[1.25em] leading-[1.2] max-md:text-base"
                      data-sticky-feature-text=""
                    >
                      {feature.description}
                    </p>
                    {feature.linkText && (
                      <p
                        className="text-white underline text-[1.25em] leading-[1.2] max-md:text-base"
                        data-sticky-feature-text=""
                      >
                        {feature.linkText}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
