"use client"

import { useEffect, useRef, useCallback } from "react"
import gsap from "gsap"
import "./expanding-feature-pills.css"

interface FeaturePill {
  label: string
  title: string
  description: string
  image: string
}

interface ExpandingFeaturePillsProps {
  items: FeaturePill[]
  coverImage?: string
}

export function ExpandingFeaturePills({
  items,
  coverImage,
}: ExpandingFeaturePillsProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  const getExpandedWidth = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return ""
    return (
      getComputedStyle(wrap)
        .getPropertyValue("--content-item-expanded")
        .trim() || ""
    )
  }, [])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || initializedRef.current) return
    initializedRef.current = true

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    const itemEls = Array.from(
      wrap.querySelectorAll<HTMLLIElement>("[data-feature-pills-item]"),
    )
    const visualEls = Array.from(
      wrap.querySelectorAll<HTMLDivElement>("[data-feature-pills-visual]"),
    )
    const cover = wrap.querySelector<HTMLDivElement>(
      "[data-feature-pills-cover]",
    )
    const closeBtn = wrap.querySelector<HTMLButtonElement>(
      "[data-feature-pills-close]",
    )
    if (!itemEls.length) return

    const ease = "back.out(2)"
    const animationDuration = 0.5
    const collapsedWidthPx = new Map<HTMLLIElement, number>()

    function getActiveIndex(): number | null {
      const active = itemEls.find(
        (it) => it.getAttribute("data-active") === "true",
      )
      return active
        ? Number(active.getAttribute("data-feature-pills-index"))
        : null
    }

    function setWrapActive(isActive: boolean) {
      wrap!.setAttribute(
        "data-feature-pills-active",
        isActive ? "true" : "false",
      )
      if (closeBtn)
        closeBtn.setAttribute("aria-hidden", isActive ? "false" : "true")
      if (cover) {
        cover.setAttribute("data-active", isActive ? "false" : "true")
        cover.setAttribute("aria-hidden", isActive ? "true" : "false")
      }
    }

    function setVisualActive(indexOrNull: number | null) {
      if (!visualEls.length) return
      visualEls.forEach((v) => {
        const idx = Number(v.getAttribute("data-feature-pills-index"))
        const isActive = indexOrNull !== null && idx === indexOrNull
        v.setAttribute("data-active", isActive ? "true" : "false")
        v.setAttribute("aria-hidden", isActive ? "false" : "true")
      })
    }

    function setItemA11y(item: HTMLLIElement, isOpen: boolean) {
      const btn = item.querySelector("[data-feature-pills-button]")
      const content = item.querySelector("[data-feature-pills-content]")
      if (!btn || !content) return
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false")
      content.setAttribute("aria-hidden", isOpen ? "false" : "true")
    }

    function measureButtonH(item: HTMLLIElement): number {
      const btn = item.querySelector("[data-feature-pills-button]")
      return btn ? Math.ceil(btn.getBoundingClientRect().height) : 0
    }

    function measureInnerH(item: HTMLLIElement, expandedW: string): number {
      const inner = item.querySelector<HTMLDivElement>(
        "[data-feature-pills-inner]",
      )
      if (!inner) return 0
      const mask = item.querySelector<HTMLDivElement>(
        "[data-feature-pills-mask]",
      )
      const prevMaskOverflow = mask ? mask.style.overflow : null
      if (mask) mask.style.overflow = "visible"
      const prevMaxW = inner.style.maxWidth
      if (expandedW) inner.style.maxWidth = expandedW
      const h = Math.ceil(inner.getBoundingClientRect().height)
      if (expandedW) inner.style.maxWidth = prevMaxW || ""
      if (mask) mask.style.overflow = prevMaskOverflow || ""
      return h
    }

    function getHeights(item: HTMLLIElement, expandedW: string) {
      const buttonH = measureButtonH(item)
      const innerH = measureInnerH(item, expandedW)
      const openH = Math.max(buttonH, innerH)
      return { buttonH, openH }
    }

    function captureCollapsedWidths() {
      itemEls.forEach((item) => {
        const prev = item.style.width
        item.style.width = ""
        collapsedWidthPx.set(
          item,
          Math.ceil(item.getBoundingClientRect().width),
        )
        item.style.width = prev
      })
    }

    function animateBox(
      el: HTMLElement,
      vars: { height?: number; width?: number | string },
    ) {
      gsap.killTweensOf(el)
      if (prefersReducedMotion) {
        if (vars.height != null) el.style.height = `${vars.height}px`
        if (vars.width != null)
          el.style.width =
            typeof vars.width === "number" ? `${vars.width}px` : vars.width
        return
      }
      gsap.to(el, {
        ...vars,
        duration: animationDuration,
        ease,
        overwrite: true,
      })
    }

    function openItem(item: HTMLLIElement) {
      const expandedW = getExpandedWidth()
      const { openH } = getHeights(item, expandedW)
      item.setAttribute("data-active", "true")
      setItemA11y(item, true)
      setWrapActive(true)
      const targetW =
        expandedW ||
        `${collapsedWidthPx.get(item) || Math.ceil(item.getBoundingClientRect().width)}px`
      animateBox(item, { height: openH, width: targetW })
    }

    function closeItem(item: HTMLLIElement) {
      const expandedW = getExpandedWidth()
      const { buttonH } = getHeights(item, expandedW)
      item.setAttribute("data-active", "false")
      setItemA11y(item, false)
      const targetW =
        collapsedWidthPx.get(item) ||
        Math.ceil(item.getBoundingClientRect().width)
      animateBox(item, { height: buttonH, width: targetW })
    }

    function switchTo(nextIndex: number) {
      const current = getActiveIndex()
      if (current === nextIndex) return
      const nextItem = itemEls[nextIndex]
      if (!nextItem) return
      if (current !== null) closeItem(itemEls[current]!)
      openItem(nextItem)
      setVisualActive(nextIndex)
    }

    function closeAll() {
      const current = getActiveIndex()
      if (current === null) return
      closeItem(itemEls[current]!)
      setVisualActive(null)
      setWrapActive(false)
    }

    itemEls.forEach((item, i) => {
      item.setAttribute("data-feature-pills-index", String(i))
      if (!item.hasAttribute("data-active"))
        item.setAttribute("data-active", "false")
      const btn = item.querySelector("[data-feature-pills-button]")
      const content = item.querySelector("[data-feature-pills-content]")
      if (btn) {
        btn.setAttribute("data-feature-pills-index", String(i))
        ;(btn as HTMLButtonElement).type = "button"
      }
      if (content && btn) {
        content.setAttribute("data-feature-pills-index", String(i))
        content.setAttribute("role", "region")
        if (!content.hasAttribute("aria-hidden"))
          content.setAttribute("aria-hidden", "true")
        if (!btn.hasAttribute("aria-expanded"))
          btn.setAttribute("aria-expanded", "false")
      }
    })

    visualEls.forEach((v, i) =>
      v.setAttribute("data-feature-pills-index", String(i)),
    )

    if (closeBtn) {
      closeBtn.type = "button"
      if (!closeBtn.hasAttribute("aria-hidden"))
        closeBtn.setAttribute("aria-hidden", "true")
      closeBtn.addEventListener("click", closeAll)
    }

    itemEls.forEach((item) => {
      const h = measureButtonH(item)
      item.style.height = `${h}px`
    })

    setWrapActive(false)
    setVisualActive(null)

    itemEls.forEach((item, i) => {
      const btn = item.querySelector("[data-feature-pills-button]")
      if (!btn) return
      btn.addEventListener("click", () => switchTo(i))
    })

    wrap.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll()
    })

    captureCollapsedWidths()

    let resizeTimer: ReturnType<typeof setTimeout>
    function handleResize() {
      const current = getActiveIndex()
      itemEls.forEach((item) => {
        if (item.getAttribute("data-active") !== "true") item.style.width = ""
      })
      captureCollapsedWidths()
      if (current !== null) {
        const item = itemEls[current]!
        const expandedW = getExpandedWidth()
        const { openH } = getHeights(item, expandedW)
        const targetW = expandedW || ""
        if (prefersReducedMotion) {
          item.style.height = `${openH}px`
          if (targetW) item.style.width = targetW
        } else {
          const fallbackW = `${Math.ceil(item.getBoundingClientRect().width)}px`
          gsap.set(item, { height: openH, width: targetW || fallbackW })
          if (targetW) item.style.width = targetW
        }
      } else {
        itemEls.forEach((item) => {
          const h = measureButtonH(item)
          item.style.height = `${h}px`
        })
      }
    }

    function debouncedResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 200)
    }

    window.addEventListener("resize", debouncedResize, { passive: true })

    return () => {
      window.removeEventListener("resize", debouncedResize)
      if (closeBtn) closeBtn.removeEventListener("click", closeAll)
    }
  }, [getExpandedWidth])

  return (
    <div
      ref={wrapRef}
      data-feature-pills-active="false"
      aria-label="product features"
      data-feature-pills-init=""
      className="text-[#f2f2f2] bg-[#272a2a] border-2 border-white/15 rounded-[1.25em] w-full max-w-[75em] h-[45em] relative overflow-clip max-desktop:bg-transparent max-desktop:border-none max-desktop:rounded-none max-desktop:h-auto"
    >
      <div className="flex justify-start items-stretch w-full h-full relative max-desktop:flex-col">
        <div className="w-1/2 relative max-desktop:w-full">
          <div
            data-feature-pills-collection=""
            className="flex flex-col justify-center items-start w-full h-full px-[1.25em] max-desktop:px-0 max-desktop:pt-[2.5em] max-desktop:pb-[4em]"
          >
            <ul
              role="list"
              data-feature-pills-list=""
              className="gap-[1em] max-w-[var(--content-item-expanded)] flex flex-col flex-none justify-center items-start w-full mx-auto max-desktop:flex-row max-desktop:flex-wrap max-desktop:justify-start max-desktop:items-start max-desktop:max-w-none"
            >
              {items.map((item, i) => (
                <li
                  key={i}
                  data-feature-pills-item=""
                  data-active="false"
                  className="p-0 relative max-desktop:w-[var(--content-item-expanded)]"
                >
                  <div className="z-0 bg-white/[0.08] rounded-[2em] w-full h-full absolute inset-0" />
                  <button
                    data-feature-pills-button=""
                    aria-expanded="false"
                    className="z-[1] gap-[0.625em] text-inherit bg-transparent border border-transparent flex justify-start items-center py-[0.75em] px-[1.25em] cursor-pointer relative max-desktop:justify-between max-desktop:w-full"
                  >
                    <span className="tracking-[-0.015em] whitespace-nowrap flex-none text-[1.25em] font-medium">
                      {item.label}
                    </span>
                    <span className="aspect-square bg-white/20 rounded-full flex-none flex justify-center items-center w-[1.25em] p-0 relative">
                      <span className="bg-white flex-none w-px h-1/2 p-0 absolute" />
                      <span className="bg-white flex-none w-1/2 h-px p-0 absolute" />
                    </span>
                  </button>
                  <div
                    aria-hidden="true"
                    data-feature-pills-content=""
                    className="z-[2] pointer-events-none absolute inset-0"
                  >
                    <div data-feature-pills-mask="" className="w-full h-full overflow-hidden">
                      <div
                        data-feature-pills-inner=""
                        className="max-w-[var(--content-item-expanded)] flex flex-col justify-start items-start w-max pt-[1.5em] px-[1.5em] pb-[2em] max-desktop:max-w-full"
                      >
                        <p className="text-[1.25em] font-medium">
                          {item.title}
                          <br />
                          <br />
                          <span className="opacity-50">
                            {item.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/2 relative max-desktop:w-full max-desktop:aspect-square max-desktop:rounded-[1.25em] max-desktop:-order-[9999] max-desktop:overflow-hidden">
          <div className="z-0 w-full h-full relative">
            <div className="w-full h-full relative overflow-hidden">
              {items.map((item, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  data-feature-pills-visual=""
                  className="opacity-0 w-full h-full absolute inset-0"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {coverImage && (
            <div
              data-feature-pills-cover=""
              className="z-[1] w-full h-full absolute inset-0"
            >
              <img
                src={coverImage}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
      <div className="z-[2] absolute top-[1em] right-[1em]">
        <button
          data-feature-pills-close=""
          aria-hidden="true"
          className="aspect-square backdrop-blur-[10px] bg-white/[0.08] border-0 rounded-[10em] flex justify-center items-center w-[2em] p-[8px] relative cursor-pointer text-inherit"
        >
          <span className="bg-white flex-none w-px h-1/2 p-0 absolute" />
          <span className="bg-white flex-none w-1/2 h-px p-0 absolute" />
        </button>
      </div>
    </div>
  )
}
