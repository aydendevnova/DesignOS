"use client"

import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import "./image-preview-cursor-follower.css"

interface PreviewItem {
  title: string
  location?: string
  year: string
  services: string
  imageSrc: string
  href?: string
}

interface ImagePreviewCursorFollowerProps {
  items: PreviewItem[]
  labelText?: string
  className?: string
}

export function ImagePreviewCursorFollower({
  items,
  labelText = "View case",
  className = "",
}: ImagePreviewCursorFollowerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const followerInnerRef = useRef<HTMLDivElement>(null)
  const prevIndexRef = useRef<number | null>(null)
  const firstEntryRef = useRef(true)

  const offset = 100
  const duration = 0.5
  const ease = "power2.inOut"

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const follower = followerRef.current
    if (!follower) return

    gsap.to(follower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: "power3",
    })
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const follower = followerRef.current
    if (!follower) return

    gsap.set(follower, { xPercent: -50, yPercent: -50 })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  const handleItemEnter = useCallback((index: number, imageSrc: string) => {
    const follower = followerRef.current
    const followerInner = followerInnerRef.current
    if (!follower || !followerInner) return

    const forward =
      prevIndexRef.current === null || index > prevIndexRef.current
    prevIndexRef.current = index

    const existingVisuals = follower.querySelectorAll("[data-follower-visual]")
    existingVisuals.forEach((el) => {
      gsap.killTweensOf(el)
      gsap.to(el, {
        yPercent: forward ? -offset : offset,
        duration,
        ease,
        overwrite: "auto",
        onComplete: () => { el.remove() },
      })
    })

    const clone = document.createElement("div")
    clone.setAttribute("data-follower-visual", "")
    const img = document.createElement("img")
    img.src = imageSrc
    img.alt = ""
    clone.appendChild(img)
    followerInner.appendChild(clone)

    if (!firstEntryRef.current) {
      gsap.fromTo(
        clone,
        { yPercent: forward ? offset : -offset },
        { yPercent: 0, duration, ease, overwrite: "auto" },
      )
    } else {
      firstEntryRef.current = false
    }
  }, [])

  const handleItemLeave = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return

    const visual = follower.querySelector("[data-follower-visual]")
    if (!visual) return

    gsap.killTweensOf(visual)
    gsap.to(visual, {
      yPercent: -offset,
      duration,
      ease,
      overwrite: "auto",
      onComplete: () => { visual.remove() },
    })
  }, [])

  const handleCollectionLeave = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return

    const visuals = follower.querySelectorAll("[data-follower-visual]")
    visuals.forEach((el) => {
      gsap.killTweensOf(el)
      gsap.delayedCall(duration, () => { el.remove() })
    })

    firstEntryRef.current = true
    prevIndexRef.current = null
  }, [])

  return (
    <div
      ref={containerRef}
      data-preview-container=""
      className={cn("w-full max-w-[76em] mx-auto px-[2em] max-md:px-[1em]", className)}
    >
      <div className="flex flex-wrap justify-start items-center w-full max-desktop:hidden">
        <div className="flex-1 max-w-[45%]">
          <span className="text-black/50 uppercase text-[0.75em]">Name</span>
        </div>
        <div className="flex-1 max-w-[15%]">
          <span className="text-black/50 uppercase text-[0.75em]">Location</span>
        </div>
        <div className="flex-1 max-w-[15%]">
          <span className="text-black/50 uppercase text-[0.75em]">Year</span>
        </div>
        <div className="flex-1 max-w-[25%]">
          <span className="text-black/50 uppercase text-[0.75em]">Services</span>
        </div>
      </div>

      <div
        data-preview-collection=""
        className="w-full mt-[0.5em]"
        onMouseLeave={handleCollectionLeave}
      >
        <div className="flex flex-col w-full relative max-desktop:flex-row max-desktop:flex-wrap max-desktop:gap-x-[1em] max-desktop:gap-y-[4em] max-md:gap-y-[3em]">
          {items.map((item, index) => (
            <div
              key={index}
              data-preview-item=""
              className="w-full transition-opacity duration-200 max-desktop:w-[calc(50%-0.5em)] max-md:w-full"
              onMouseEnter={() => handleItemEnter(index, item.imageSrc)}
              onMouseLeave={handleItemLeave}
            >
              <a
                href={item.href ?? "#"}
                data-preview-item-inner=""
                className="border-t border-black/25 w-full pt-[2.5em] pb-[2.5em] no-underline text-inherit block max-desktop:border max-desktop:border-transparent max-desktop:flex max-desktop:flex-col max-desktop:pt-0 max-desktop:pb-0"
              >
                <div className="flex flex-wrap justify-start items-center w-full max-desktop:gap-y-[0.5em]">
                  <div className="flex-1 max-w-[45%] max-desktop:flex-none max-desktop:order-first max-desktop:w-full max-desktop:max-w-none">
                    <h2 className="text-[3.5em] font-normal leading-none max-desktop:text-[2em]">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex-1 max-w-[15%] max-desktop:hidden">
                    <p className="text-[1.25em] font-normal leading-[1.2]">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex-1 max-w-[15%] max-desktop:text-right max-desktop:max-w-[20%]">
                    <p className="text-[1.25em] font-normal leading-[1.2]">
                      {item.year}
                    </p>
                  </div>
                  <div className="flex-1 max-w-[25%] max-desktop:order-first max-desktop:max-w-[80%]">
                    <p className="text-[1.25em] font-normal leading-[1.2]">
                      {item.services}
                    </p>
                  </div>
                </div>
                <div className="aspect-[1/1.25] w-[20em] hidden absolute overflow-hidden max-desktop:rounded-[0.75em] max-desktop:order-first max-desktop:w-full max-desktop:mb-[1em] max-desktop:block max-desktop:relative">
                  <img
                    src={item.imageSrc}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={followerRef}
        className="z-[100] aspect-[1/1.25] pointer-events-none rounded-[0.75em] justify-center items-center w-[20em] flex fixed top-0 left-0 overflow-hidden max-desktop:hidden"
      >
        <div
          ref={followerInnerRef}
          data-preview-follower-inner=""
          className="z-[2] justify-center items-center w-full h-full flex relative"
        >
          <div
            data-preview-follower-label=""
            className="z-[2] absolute"
          >
            <div className="bg-white rounded-[0.25em] py-[0.75em] px-[1.25em] text-base">
              {labelText}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
