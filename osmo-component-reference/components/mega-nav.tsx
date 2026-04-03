"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import "./mega-nav.css"

function OsmoLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 92 20" fill="none">
      <path d="M32.3282 19.9998C35.7836 19.9998 38.8319 18.2812 40.6512 15.6618C41.6963 18.3292 44.3996 19.9998 47.9789 19.9998C50.5576 19.9998 52.7327 19.1845 54.1302 17.8438L53.9287 19.5858H58.2951L59.3401 10.5658L61.7665 19.5858H66.1369L68.5633 10.5658L69.6077 19.5858H73.974L73.5064 15.5478C75.3156 18.2312 78.4024 19.9998 81.9075 19.9998C87.4813 19.9998 91.9999 15.5292 91.9999 10.0145C91.9999 4.49982 87.48 0.0291549 81.9062 0.0291549C77.5817 0.0291549 73.8939 2.72115 72.4573 6.50249L71.7518 0.413822H66.9266L63.9504 11.4785L60.9741 0.413822H56.1489L55.4711 6.26382C55.3889 4.56182 54.6827 3.01982 53.4645 1.90315C52.1067 0.658488 50.2099 0.000488281 47.9783 0.000488281C45.8874 0.000488281 44.0856 0.589822 42.7677 1.70515C41.796 2.52782 41.1599 3.58982 40.914 4.76782C39.1358 1.92382 35.9567 0.0291549 32.3282 0.0291549C26.7544 0.0291549 22.2358 4.49982 22.2358 10.0145C22.2358 15.5292 26.7544 19.9998 32.3282 19.9998ZM81.9062 4.52249C84.9721 4.52249 87.4571 6.98115 87.4571 10.0145C87.4571 13.0478 84.9721 15.5065 81.9062 15.5065C78.8403 15.5065 76.3553 13.0478 76.3553 10.0145C76.3553 6.98115 78.8403 4.52249 81.9062 4.52249ZM47.9789 4.18582C49.8737 4.18582 51.0367 5.05382 51.0893 6.50782L51.1054 6.94982H55.3923L54.9502 10.7685C54.7306 10.4185 54.4698 10.0952 54.1659 9.80116C53.166 8.83582 51.6997 8.17849 49.807 7.84782L47.2553 7.39582C45.5647 7.09449 45.2183 6.57182 45.2183 5.87982C45.2183 5.70649 45.2958 4.18515 47.9789 4.18515V4.18582ZM46.1468 11.5932L49.1534 12.1512C51.0947 12.5198 51.3561 13.2992 51.3561 14.0132C51.3561 15.1405 50.0617 15.8405 47.9776 15.8405C45.5027 15.8405 44.5674 14.4592 44.5182 13.2765L44.5 12.8372H42.0083C42.2744 11.9418 42.42 10.9952 42.42 10.0145C42.42 9.96782 42.4173 9.92115 42.4166 9.87449C43.3128 10.7165 44.564 11.3038 46.1462 11.5932H46.1468ZM32.3282 4.52249C35.3941 4.52249 37.8791 6.98115 37.8791 10.0145C37.8791 13.0478 35.3941 15.5065 32.3282 15.5065C29.2624 15.5065 26.7774 13.0478 26.7774 10.0145C26.7774 6.98115 29.2624 4.52249 32.3282 4.52249Z" fill="#151313" />
      <path d="M13.6751 8.238L18.1479 3.81267L16.3609 2.04467L11.8881 6.47C11.6974 6.65933 11.3706 6.52533 11.3706 6.258V0H8.84382V7.55C8.84382 8.21267 8.30073 8.75 7.63095 8.75H0V11.25H6.3251C6.5953 11.25 6.73074 11.5733 6.53937 11.762L2.06726 16.1873L3.85422 17.9553L8.32701 13.53C8.51769 13.3413 8.84449 13.4747 8.84449 13.742V20H11.3713V12.45C11.3713 11.7873 11.9144 11.25 12.5842 11.25H20.2151V8.75H13.89C13.6198 8.75 13.4844 8.42667 13.6757 8.238H13.6751Z" fill="#6840FF" />
    </svg>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M6.6665 8.3335L9.99984 11.6668L13.3332 8.3335" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M8.3335 13.3335L11.6668 10.0002L8.3335 6.66683" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const NAV_LINK = "text-[#201d1d] cursor-pointer bg-transparent rounded-[0.25em] justify-start items-center py-[0.375em] px-[0.625em] no-underline flex"
const NAV_LINK_MOBILE = "max-desktop:border-b max-desktop:border-black/10 max-desktop:rounded-none max-desktop:w-full max-desktop:py-[0.75em] max-desktop:px-0 max-desktop:text-[1.25em]"
const NAV_LINK_LABEL = "text-[0.9375em] font-medium leading-[1.2] max-desktop:text-[1.25em] max-xs:text-base"
const NAV_LINK_ICON = "w-[1.25em] max-desktop:w-[1.5em] max-xs:w-[1.375em]"
const PANEL_COL = "gap-[1.25em] border-r border-black/10 flex flex-col flex-1 justify-start items-start py-[2.5em] px-[1.5em] last:border-none max-desktop:border-b max-desktop:border-r-0 max-desktop:pt-[1.5em] max-desktop:pb-[1.5em]"
const PANEL_LINK = "text-[#201d1d] cursor-pointer rounded-[0.25em] flex flex-col justify-start items-start py-[0.625em] px-[0.75em] no-underline hover:bg-[#f5f5f5]"
const CTA = "cursor-pointer bg-[#6840ff] text-[#f2f2f2] rounded-[0.25em] justify-center items-center py-[0.375em] px-[0.625em] no-underline flex max-desktop:py-[1em] max-desktop:pr-[0.75em] max-desktop:pl-[1em]"

/* ── Navigation data ──────────────────────────────────── */

const NAV_PANELS: NavPanel[] = [
  {
    name: "products",
    label: "Products",
    columns: [
      {
        heading: "Platform",
        links: [
          { label: "Overview", description: "See the full platform", href: "#" },
          { label: "Analytics", description: "Track and measure", href: "#" },
          { label: "Integrations", description: "Connect your tools", href: "#" },
        ],
      },
      {
        heading: "Features",
        links: [
          { label: "Automation", description: "Streamline workflows", href: "#" },
          { label: "Reporting", description: "Generate insights", href: "#" },
          { label: "AI", description: "Build custom integrations", href: "#" },
        ],
      },
      {
        heading: "Infrastructure",
        highlighted: true,
        links: [
          { label: "Cloud", description: "Managed hosting", href: "#" },
          { label: "Security", description: "Enterprise grade", href: "#" },
        ],
      },
    ],
  },
  {
    name: "solutions",
    label: "Solutions",
    columns: [
      {
        heading: "By use case",
        links: [
          { label: "SaaS", description: "Sell online at scale", href: "#" },
          { label: "E-commerce", description: "Subscription businesses", href: "#" },
          { label: "Marketplaces", description: "Multi-vendor platforms", href: "#" },
          { label: "Platforms", description: "Built on top of Osmo", href: "#" },
          { label: "Creator economy", description: "Monetize your audience", href: "#" },
        ],
      },
      {
        heading: "By industries",
        links: [
          { label: "Healthcare", description: "HIPAA compliant", href: "#" },
          { label: "Finance", description: "Secure services", href: "#" },
          { label: "Education", description: "Learning tools", href: "#" },
          { label: "Retail", description: "Omnichannel commerce", href: "#" },
        ],
      },
      {
        heading: "By size",
        links: [
          { label: "Startups", description: "Launch faster", href: "#" },
          { label: "Enterprise", description: "Scale with confidence", href: "#" },
        ],
      },
      {
        heading: "Quick links",
        highlighted: true,
        links: [
          { label: "Customer stories", href: "#" },
          { label: "Partners", href: "#" },
          { label: "Professional services", href: "#" },
          { label: "Migrations", href: "#" },
          { label: "Compare plans", href: "#" },
        ],
      },
    ],
  },
  {
    name: "company",
    label: "Company",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About us", description: "Our mission and team", href: "#" },
          { label: "Careers", description: "Join the team", href: "#" },
          { label: "Blog", description: "News and updates", href: "#" },
        ],
      },
      {
        heading: "Quick links",
        links: [
          { label: "Documentation", href: "#" },
          { label: "Help center", href: "#" },
          { label: "Contact", href: "#" },
          { label: "Status", href: "#" },
          { label: "Legal", href: "#" },
        ],
      },
    ],
    featured: {
      imageSrc: "https://cdn.prod.website-files.com/69b13f28b9d6dbc2dfbf1cb1/69b15819d9e2e5fd40ddf716_osmo-mega-nav-card.avif",
      title: "Sign up for the '26 conf",
      subtitle: "Tickets on sale now",
      ctaLabel: "Learn more",
      ctaHref: "#",
    },
  },
]

const NAV_LINKS: NavLink[] = [
  { label: "Pricing", href: "#" },
]

const NAV_CTAS: NavCta[] = [
  { label: "Log in", href: "#", variant: "outline" },
  { label: "Get Started", href: "#", variant: "filled" },
]

/* ── Component ────────────────────────────────────────── */

export function MegaNav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    const menuWrap = navRef.current

    const DUR = {
      bgMorph: 0.4,
      contentIn: 0.3,
      contentOut: 0.2,
      stagger: 0.25,
      backdropIn: 0.3,
      backdropOut: 0.2,
      openScale: 0.35,
      closeScale: 0.25,
    }
    const HOVER_ENTER = 120
    const HOVER_LEAVE = 150

    const navList = menuWrap.querySelector("[data-nav-list]") as HTMLElement
    const dropWrapper = menuWrap.querySelector("[data-dropdown-wrapper]") as HTMLElement
    const dropContainer = menuWrap.querySelector("[data-dropdown-container]") as HTMLElement
    const backdrop = menuWrap.querySelector("[data-menu-backdrop]") as HTMLElement
    const toggles = [...menuWrap.querySelectorAll("[data-dropdown-toggle]")] as HTMLElement[]
    const panels = [...menuWrap.querySelectorAll("[data-nav-content]")] as HTMLElement[]
    const burger = menuWrap.querySelector("[data-burger-toggle]") as HTMLElement
    const backBtn = menuWrap.querySelector("[data-mobile-back]") as HTMLElement
    const logo = menuWrap.querySelector("[data-menu-logo]") as HTMLElement
    const lineTop = menuWrap.querySelector("[data-burger-line='top']") as HTMLElement
    const lineMid = menuWrap.querySelector("[data-burger-line='mid']") as HTMLElement
    const lineBot = menuWrap.querySelector("[data-burger-line='bot']") as HTMLElement

    const state = {
      isOpen: false,
      activePanel: null as string | null,
      activePanelIndex: -1,
      isMobile: window.innerWidth <= 991,
      mobileMenuOpen: false,
      mobilePanelActive: null as string | null,
      hoverTimer: null as ReturnType<typeof setTimeout> | null,
      leaveTimer: null as ReturnType<typeof setTimeout> | null,
      tl: null as gsap.core.Timeline | null,
      mobileTl: null as gsap.core.Timeline | null,
      mobilePanelTl: null as gsap.core.Timeline | null,
    }

    const getPanel = (name: string) =>
      menuWrap.querySelector(`[data-nav-content="${name}"]`) as HTMLElement | null
    const getToggle = (name: string) =>
      menuWrap.querySelector(`[data-dropdown-toggle="${name}"]`) as HTMLElement | null
    const getFade = (el: HTMLElement) =>
      el.querySelectorAll("[data-menu-fade]") as NodeListOf<HTMLElement>
    const getNavItems = () =>
      navList.querySelectorAll("[data-nav-list-item]") as NodeListOf<HTMLElement>
    const getIndex = (name: string) => toggles.indexOf(getToggle(name)!)
    const staggerAmt = (n: number): number | { amount: number } =>
      n <= 1 ? 0 : { amount: DUR.stagger }

    function clearTimers() {
      if (state.hoverTimer) clearTimeout(state.hoverTimer)
      if (state.leaveTimer) clearTimeout(state.leaveTimer)
      state.hoverTimer = state.leaveTimer = null
    }

    function killTl(key: "tl" | "mobileTl" | "mobilePanelTl") {
      if (state[key]) {
        state[key]!.kill()
        ;(state as Record<string, unknown>)[key] = null
      }
    }

    function killDropdown() {
      killTl("tl")
      gsap.killTweensOf(dropContainer)
      gsap.killTweensOf(backdrop)
      panels.forEach((p) => {
        gsap.killTweensOf(p)
        gsap.killTweensOf(getFade(p))
      })
    }

    function killMobile() {
      killTl("mobileTl")
      gsap.killTweensOf([navList, lineTop, lineMid, lineBot])
    }

    function killMobilePanel() {
      killTl("mobilePanelTl")
      gsap.killTweensOf(getNavItems())
      gsap.killTweensOf([backBtn, logo])
      panels.forEach((p) => {
        gsap.killTweensOf(p)
        gsap.killTweensOf(getFade(p))
      })
    }

    function resetToggles() {
      toggles.forEach((t) => t.setAttribute("aria-expanded", "false"))
    }

    function resetDesktop() {
      panels.forEach((p) => {
        gsap.set(p, { visibility: "hidden", opacity: 0, pointerEvents: "none", xPercent: 0 })
        gsap.set(getFade(p), { autoAlpha: 0, x: 0, y: 0 })
      })
      gsap.set(dropContainer, { height: 0 })
      gsap.set(backdrop, { autoAlpha: 0 })
      menuWrap.setAttribute("data-menu-open", "false")
      resetToggles()
    }

    function setupMobile() {
      panels.forEach((p) => {
        gsap.set(p, { autoAlpha: 0, xPercent: 0, visibility: "visible", pointerEvents: "none" })
        gsap.set(getFade(p), { xPercent: 20, autoAlpha: 0 })
      })
      gsap.set(getNavItems(), { xPercent: 0, y: 0, autoAlpha: 1 })
      gsap.set(navList, { autoAlpha: 0, x: 0 })
      gsap.set(backBtn, { autoAlpha: 0 })
      gsap.set(logo, { autoAlpha: 1 })
      gsap.set(dropContainer, { clearProps: "height" })
      gsap.set(backdrop, { autoAlpha: 0 })
    }

    function measurePanel(name: string) {
      const el = getPanel(name)
      if (!el) return 0
      const s = el.style
      const prev: [string, string, string] = [s.visibility, s.opacity, s.pointerEvents]
      Object.assign(s, { visibility: "visible", opacity: "0", pointerEvents: "none" })
      const h = el.getBoundingClientRect().height
      ;[s.visibility, s.opacity, s.pointerEvents] = prev
      return h
    }

    function openDropdown(panelName: string) {
      if (state.isOpen && state.activePanel === panelName) return
      if (state.isOpen) return switchPanel(state.activePanel!, panelName)

      const height = measurePanel(panelName)
      if (!height) return

      killDropdown()
      resetDesktop()

      const el = getPanel(panelName)
      if (!el) return
      const fade = getFade(el)
      const toggle = getToggle(panelName)

      state.isOpen = true
      state.activePanel = panelName
      state.activePanelIndex = getIndex(panelName)
      menuWrap.setAttribute("data-menu-open", "true")
      if (toggle) toggle.setAttribute("aria-expanded", "true")

      gsap.set(dropContainer, { height: 0 })

      const tl = gsap.timeline()
      state.tl = tl
      tl.to(backdrop, { autoAlpha: 1, duration: DUR.backdropIn, ease: "power2.out" }, 0)
      tl.to(dropContainer, { height, duration: DUR.openScale, ease: "power3.out" }, 0)
      tl.set(el, { visibility: "visible", opacity: 1, pointerEvents: "auto" }, 0.05)
      if (fade.length) {
        tl.fromTo(
          fade,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: DUR.contentIn, stagger: staggerAmt(fade.length), ease: "power3.out" },
          0.1,
        )
      }
    }

    function closeDropdown() {
      if (!state.isOpen) return
      const el = state.activePanel ? getPanel(state.activePanel) : null
      const fade = el ? getFade(el) : ([] as unknown as NodeListOf<HTMLElement>)

      killDropdown()

      const tl = gsap.timeline({
        onComplete() {
          state.isOpen = false
          state.activePanel = null
          state.activePanelIndex = -1
          state.tl = null
          resetDesktop()
        },
      })
      state.tl = tl
      if (fade.length) tl.to(fade, { autoAlpha: 0, y: -4, duration: DUR.contentOut * 0.7, ease: "power2.in" }, 0)
      tl.to(dropContainer, { height: 0, duration: DUR.closeScale, ease: "power2.in" }, 0.05)
      tl.to(backdrop, { autoAlpha: 0, duration: DUR.backdropOut, ease: "power2.out" }, 0)
      if (el) tl.set(el, { visibility: "hidden", opacity: 0, pointerEvents: "none" })
    }

    function switchPanel(fromName: string, toName: string) {
      const dir = getIndex(toName) > getIndex(fromName) ? 1 : -1
      const fromEl = getPanel(fromName)
      const toEl = getPanel(toName)
      if (!fromEl || !toEl) return

      const fromFade = getFade(fromEl)
      const toFade = getFade(toEl)
      const toHeight = measurePanel(toName)
      if (!toHeight) return

      killDropdown()

      panels.forEach((p) => {
        gsap.set(p, { visibility: "hidden", opacity: 0, pointerEvents: "none", xPercent: 0 })
        gsap.set(getFade(p), { autoAlpha: 0, x: 0, y: 0 })
      })
      gsap.set(fromEl, { visibility: "visible", opacity: 1, pointerEvents: "auto", x: 0 })
      if (fromFade.length) gsap.set(fromFade, { autoAlpha: 1, x: 0, y: 0 })
      gsap.set(backdrop, { autoAlpha: 1 })

      const toToggle = getToggle(toName)
      state.activePanel = toName
      state.activePanelIndex = getIndex(toName)
      resetToggles()
      if (toToggle) toToggle.setAttribute("aria-expanded", "true")

      const xOut = dir * -30
      const xIn = dir * 30
      const tl = gsap.timeline()
      state.tl = tl

      if (fromFade.length)
        tl.to(fromFade, { autoAlpha: 0, x: xOut, duration: DUR.contentOut, ease: "power2.in" }, 0)
      tl.set(fromEl, { visibility: "hidden", opacity: 0, pointerEvents: "none", xPercent: 0 }, DUR.contentOut)
      if (fromFade.length) tl.set(fromFade, { x: 0 }, DUR.contentOut)
      tl.to(dropContainer, { height: toHeight, duration: DUR.bgMorph, ease: "power3.out" }, 0.05)
      tl.set(toEl, { visibility: "visible", opacity: 1, pointerEvents: "auto", xPercent: 0 }, DUR.contentOut * 0.5)
      if (toFade.length) {
        tl.fromTo(
          toFade,
          { autoAlpha: 0, x: xIn },
          { autoAlpha: 1, x: 0, duration: DUR.contentIn, stagger: staggerAmt(toFade.length), ease: "power3.out" },
          DUR.contentOut * 0.6,
        )
      }
    }

    function handleToggleEnter(e: Event) {
      if (state.isMobile) return
      const name = (e.currentTarget as HTMLElement).getAttribute("data-dropdown-toggle")
      if (!name) return
      if (state.leaveTimer) { clearTimeout(state.leaveTimer); state.leaveTimer = null }
      if (state.hoverTimer) clearTimeout(state.hoverTimer)
      state.hoverTimer = setTimeout(() => openDropdown(name), state.isOpen ? 0 : HOVER_ENTER)
    }

    function handleToggleLeave() {
      if (state.isMobile) return
      if (state.hoverTimer) { clearTimeout(state.hoverTimer); state.hoverTimer = null }
      state.leaveTimer = setTimeout(closeDropdown, HOVER_LEAVE)
    }

    function handleWrapperEnter() {
      if (state.isMobile) return
      if (state.leaveTimer) { clearTimeout(state.leaveTimer); state.leaveTimer = null }
    }

    function handleWrapperLeave() {
      if (state.isMobile) return
      state.leaveTimer = setTimeout(closeDropdown, HOVER_LEAVE)
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key !== "Escape") return
      if (state.isMobile) {
        if (state.mobilePanelActive) closeMobilePanel()
        else if (state.mobileMenuOpen) closeMobileMenu()
        return
      }
      if (state.isOpen) {
        const t = getToggle(state.activePanel!)
        closeDropdown()
        if (t) t.focus()
      }
    }

    function handleDocClick(e: Event) {
      if (state.isMobile || !state.isOpen) return
      if (!(e.target as Element).closest("[data-menu-wrap]")) closeDropdown()
    }

    function focusFirstLink(panelName: string) {
      setTimeout(() => {
        const el = getPanel(panelName)
        if (!el) return
        const link = el.querySelector("a") as HTMLElement | null
        if (!link) return
        gsap.set(link, { visibility: "visible" })
        link.focus()
      }, 80)
    }

    function handleKeydownOnToggle(e: Event) {
      if (state.isMobile) return
      const ke = e as KeyboardEvent
      const name = (ke.currentTarget as HTMLElement).getAttribute("data-dropdown-toggle")

      if (ke.key === "Enter" || ke.key === " ") {
        ke.preventDefault()
        if (state.isOpen && state.activePanel === name) closeDropdown()
        else { if (name) { openDropdown(name); focusFirstLink(name) } }
        return
      }
      if (ke.key === "ArrowDown") {
        ke.preventDefault()
        if (name) {
          if (!state.isOpen || state.activePanel !== name) openDropdown(name)
          focusFirstLink(name)
        }
      }
      if (ke.key === "Tab" && !ke.shiftKey && state.isOpen && state.activePanel === name) {
        ke.preventDefault()
        if (name) {
          const link = getPanel(name)?.querySelector("a") as HTMLElement | null
          if (link) link.focus()
        }
      }
    }

    function handleKeydownInPanel(e: Event) {
      if (state.isMobile || !state.isOpen) return
      const ke = e as KeyboardEvent
      const el = getPanel(state.activePanel!)
      if (!el) return

      const links = [...el.querySelectorAll("a")] as HTMLElement[]
      const idx = links.indexOf(document.activeElement as HTMLElement)

      if (ke.key === "ArrowDown") {
        ke.preventDefault()
        links[(idx + 1) % links.length]?.focus()
      }
      if (ke.key === "ArrowUp") {
        ke.preventDefault()
        if (idx <= 0) {
          const t = getToggle(state.activePanel!)
          if (t) t.focus()
        } else {
          links[idx - 1]?.focus()
        }
      }
      if (ke.key === "Tab" && !ke.shiftKey && idx === links.length - 1) {
        ke.preventDefault()
        const curIdx = toggles.indexOf(getToggle(state.activePanel!)!)
        const next = curIdx < toggles.length - 1 ? toggles[curIdx + 1] : null
        closeDropdown()
        if (next) next.focus()
      }
      if (ke.key === "Tab" && ke.shiftKey && idx === 0) {
        ke.preventDefault()
        const t = getToggle(state.activePanel!)
        if (t) t.focus()
      }
    }

    function animateBurger(toX: boolean) {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })
      if (toX) {
        tl.to(lineTop, { y: "0.3125em", duration: 0.15 }, 0)
        tl.to(lineBot, { y: "-0.3125em", duration: 0.15 }, 0)
        tl.to(lineMid, { autoAlpha: 0, duration: 0.1 }, 0.1)
        tl.to(lineTop, { rotation: 45, duration: 0.2 }, 0.15)
        tl.to(lineBot, { rotation: -45, duration: 0.2 }, 0.15)
      } else {
        tl.to(lineTop, { rotation: 0, duration: 0.2 }, 0)
        tl.to(lineBot, { rotation: 0, duration: 0.2 }, 0)
        tl.to(lineTop, { y: 0, duration: 0.15 }, 0.15)
        tl.to(lineBot, { y: 0, duration: 0.15 }, 0.15)
        tl.to(lineMid, { autoAlpha: 1, duration: 0.1 }, 0.15)
      }
      return tl
    }

    function openMobileMenu() {
      killMobile()
      state.mobileMenuOpen = true
      menuWrap.setAttribute("data-menu-open", "true")
      burger.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"

      const items = getNavItems()
      const tl = gsap.timeline()
      state.mobileTl = tl
      tl.add(animateBurger(true), 0)
      tl.to(navList, { autoAlpha: 1, duration: 0.3, ease: "power2.out" }, 0)
      if (items.length) {
        tl.fromTo(
          items,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.04, ease: "power3.out" },
          0.15,
        )
      }
    }

    function closeMobileMenu() {
      const hadPanel = state.mobilePanelActive
      const panelEl = hadPanel ? getPanel(hadPanel) : null

      killMobile()
      killMobilePanel()

      menuWrap.setAttribute("data-menu-open", "false")
      state.mobileMenuOpen = false
      state.mobilePanelActive = null
      burger.setAttribute("aria-expanded", "false")

      const tl = gsap.timeline({
        onComplete() {
          document.body.style.overflow = ""
          state.mobileTl = null
          setupMobile()
        },
      })
      state.mobileTl = tl

      tl.add(animateBurger(false), 0)

      if (hadPanel && panelEl) {
        tl.to(panelEl, { autoAlpha: 0, duration: 0.3, ease: "power2.inOut" }, 0.05)
        tl.to(backBtn, { autoAlpha: 0, duration: 0.2, ease: "power2.in" }, 0.05)
      }

      tl.to(navList, { autoAlpha: 0, duration: 0.3, ease: "power2.inOut" }, 0.05)
    }

    function openMobilePanel(panelName: string) {
      const el = getPanel(panelName)
      if (!el) return
      killMobilePanel()
      state.mobilePanelActive = panelName

      const navItems = getNavItems()
      const panelFade = getFade(el)

      const tl = gsap.timeline()
      state.mobilePanelTl = tl

      if (navItems.length) {
        tl.to(navItems, { xPercent: -10, autoAlpha: 0, duration: 0.35, stagger: 0.03, ease: "power2.in" }, 0)
      }

      tl.to(logo, { autoAlpha: 0, duration: 0.2, ease: "power2.in" }, 0)
      tl.to(backBtn, { autoAlpha: 1, duration: 0.25, ease: "power2.inOut" }, 0.15)

      tl.set(el, { autoAlpha: 1, xPercent: 0, pointerEvents: "auto" }, 0.2)
      if (panelFade.length) {
        tl.fromTo(
          panelFade,
          { xPercent: 8, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 0.3, stagger: staggerAmt(panelFade.length), ease: "power3.out" },
          0.25,
        )
      }
    }

    function closeMobilePanel() {
      if (!state.mobilePanelActive) return
      const el = getPanel(state.mobilePanelActive)
      if (!el) return
      killMobilePanel()

      const navItems = getNavItems()
      const panelFade = getFade(el)

      const tl = gsap.timeline({
        onComplete() {
          state.mobilePanelActive = null
          state.mobilePanelTl = null
        },
      })
      state.mobilePanelTl = tl

      if (panelFade.length) {
        tl.to(el, { xPercent: 20, autoAlpha: 0, duration: 0.3, stagger: 0.02, ease: "power2.in" }, 0)
      }

      tl.set(el, { autoAlpha: 0, pointerEvents: "none" }, 0.25)

      tl.to(backBtn, { autoAlpha: 0, duration: 0.2, ease: "power2.in" }, 0)
      tl.to(logo, { autoAlpha: 1, duration: 0.25, ease: "power2.out" }, 0.15)

      if (navItems.length) {
        tl.fromTo(
          navItems,
          { xPercent: -20, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 0.35, stagger: 0.03, ease: "power3.out" },
          0.25,
        )
      }
    }

    function handleToggleClick(e: Event) {
      if (!state.isMobile || !state.mobileMenuOpen) return
      const name = (e.currentTarget as HTMLElement).getAttribute("data-dropdown-toggle")
      if (name) {
        e.preventDefault()
        openMobilePanel(name)
      }
    }

    function handleBurgerClick() {
      state.mobileMenuOpen ? closeMobileMenu() : openMobileMenu()
    }

    let resizeTimer: ReturnType<typeof setTimeout> | null = null
    let lastWidth = window.innerWidth
    function handleResize() {
      const w = window.innerWidth
      if (w === lastWidth) return
      lastWidth = w
      if (resizeTimer) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const was = state.isMobile
        state.isMobile = window.innerWidth <= 991

        if (was && !state.isMobile) {
          killMobile()
          killMobilePanel()
          gsap.set(navList, { clearProps: "all" })
          gsap.set(getNavItems(), { clearProps: "all" })
          gsap.set(backBtn, { autoAlpha: 0 })
          gsap.set(logo, { clearProps: "all" })
          gsap.set([lineTop, lineMid, lineBot], { rotation: 0, y: 0, autoAlpha: 1 })
          burger.setAttribute("aria-expanded", "false")
          state.mobileMenuOpen = false
          state.mobilePanelActive = null
          document.body.style.overflow = ""
          resetDesktop()
        }
        if (!was && state.isMobile) {
          killDropdown()
          state.isOpen = false
          state.activePanel = null
          state.activePanelIndex = -1
          clearTimers()
          menuWrap.setAttribute("data-menu-open", "false")
          resetToggles()
          setupMobile()
        }
      }, 150)
    }

    toggles.forEach((btn) => {
      btn.addEventListener("mouseenter", handleToggleEnter)
      btn.addEventListener("mouseleave", handleToggleLeave)
      btn.addEventListener("keydown", handleKeydownOnToggle)
      btn.addEventListener("click", handleToggleClick)
    })
    dropWrapper.addEventListener("mouseenter", handleWrapperEnter)
    dropWrapper.addEventListener("mouseleave", handleWrapperLeave)
    panels.forEach((p) => p.addEventListener("keydown", handleKeydownInPanel))
    backdrop.addEventListener("click", closeDropdown)
    document.addEventListener("keydown", handleEscape)
    document.addEventListener("click", handleDocClick)
    burger.addEventListener("click", handleBurgerClick)
    backBtn.addEventListener("click", closeMobilePanel)
    window.addEventListener("resize", handleResize)

    state.isMobile ? setupMobile() : resetDesktop()

    return () => {
      clearTimers()
      killDropdown()
      killMobile()
      killMobilePanel()
      if (resizeTimer) clearTimeout(resizeTimer)

      toggles.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleToggleEnter)
        btn.removeEventListener("mouseleave", handleToggleLeave)
        btn.removeEventListener("keydown", handleKeydownOnToggle)
        btn.removeEventListener("click", handleToggleClick)
      })
      dropWrapper.removeEventListener("mouseenter", handleWrapperEnter)
      dropWrapper.removeEventListener("mouseleave", handleWrapperLeave)
      panels.forEach((p) => p.removeEventListener("keydown", handleKeydownInPanel))
      backdrop.removeEventListener("click", closeDropdown)
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleDocClick)
      burger.removeEventListener("click", handleBurgerClick)
      backBtn.removeEventListener("click", closeMobilePanel)
      window.removeEventListener("resize", handleResize)

      document.body.style.overflow = ""
    }
  }, [])

  return (
    <nav
      ref={navRef}
      data-menu-open="false"
      data-menu-wrap=""
      className="z-[100] fixed top-[1.25em] left-[1.25em] right-[1.25em] font-haffer max-desktop:top-0 max-desktop:left-0 max-desktop:right-0"
    >
      <div className="z-[3] bg-white border-b border-black/10 rounded-[0.25em] w-full max-w-[80em] mx-auto relative">
        <div className="h-[var(--nav-height)] justify-between items-center py-[1em] px-[1.5em] flex">
          <div className="justify-start items-center w-full flex relative max-desktop:justify-between">
            <a data-menu-logo="" href="#" className="flex-none w-[5.75em] mr-[3em] flex">
              <OsmoLogo />
            </a>
            <div
              data-nav-list=""
              data-mobile-nav=""
              className="gap-[0.75em] justify-start items-center w-full flex max-desktop:opacity-0 max-desktop:invisible max-desktop:bg-white max-desktop:flex-col max-desktop:justify-between max-desktop:items-center max-desktop:py-[2em] max-desktop:px-[1.5em] max-desktop:fixed max-desktop:bottom-0 max-desktop:left-0 max-desktop:right-0 max-desktop:top-[var(--nav-height)] max-desktop:overflow-auto"
            >
              <ul className="gap-[0.75em] justify-start items-center flex max-desktop:gap-0 max-desktop:flex-col max-desktop:justify-start max-desktop:items-stretch max-desktop:w-full">
                {NAV_PANELS.map((panel) => (
                  <li key={panel.name} data-nav-list-item="">
                    <button
                      data-dropdown-toggle={panel.name}
                      aria-expanded="false"
                      aria-haspopup="true"
                      className={cn(NAV_LINK, NAV_LINK_MOBILE, "max-desktop:justify-between")}
                    >
                      <span className={NAV_LINK_LABEL}>{panel.label}</span>
                      <ChevronDown className={cn(NAV_LINK_ICON, "max-desktop:-rotate-90")} />
                    </button>
                  </li>
                ))}
                {NAV_LINKS.map((link) => (
                  <li key={link.label} data-nav-list-item="">
                    <a href={link.href} className={cn(NAV_LINK, NAV_LINK_MOBILE)}>
                      <span className={NAV_LINK_LABEL}>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul
                data-nav-list-item=""
                className="gap-[0.75em] justify-start items-center flex ml-auto max-desktop:gap-[1em] max-desktop:flex-row max-desktop:justify-between max-desktop:items-stretch max-desktop:w-full"
              >
                {NAV_CTAS.map((cta) => (
                  <li key={cta.label} className="max-desktop:flex-1">
                    <a
                      href={cta.href}
                      className={cta.variant === "outline"
                        ? cn(CTA, "text-[#6840ff] bg-transparent border border-[#6840ff]")
                        : CTA}
                    >
                      <span className={NAV_LINK_LABEL}>{cta.label}</span>
                      {cta.variant === "filled" && <ChevronRight className={NAV_LINK_ICON} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gap-[0.75em] justify-end items-center hidden max-desktop:flex">
              <button
                data-burger-toggle=""
                aria-label="toggle menu"
                aria-expanded="false"
                className="gap-[0.2em] cursor-pointer bg-[#e4e0f5] rounded-[0.25em] flex flex-col justify-center items-center w-[2.5em] h-[2.5em] p-0"
              >
                <span data-burger-line="top" className="z-[1] bg-[#6840ff] rounded-[0.125em] flex-none w-[1.25em] h-[0.125em] p-0 block relative" />
                <span data-burger-line="mid" className="z-[1] bg-[#6840ff] rounded-[0.125em] flex-none w-[1.25em] h-[0.125em] p-0 block relative" />
                <span data-burger-line="bot" className="z-[1] bg-[#6840ff] rounded-[0.125em] flex-none w-[1.25em] h-[0.125em] p-0 block relative" />
              </button>
            </div>
            <div data-mobile-back="" className="z-[2] opacity-0 invisible absolute left-[-0.625em]">
              <button
                aria-label="back to menu"
                className={cn(NAV_LINK, "max-desktop:rounded-none max-desktop:w-full max-desktop:py-[0.75em] max-desktop:px-0 max-desktop:text-base")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className={NAV_LINK_ICON}>
                  <path d="M11.6665 6.6665L8.33317 9.99984L11.6665 13.3332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={NAV_LINK_LABEL}>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        data-dropdown-wrapper=""
        className="z-[2] pointer-events-none w-full max-w-[80rem] mx-auto absolute top-[calc(100%-0.25em)] left-0 right-0 max-desktop:z-[4] max-desktop:bottom-0 max-desktop:top-[var(--nav-height)] max-desktop:fixed"
      >
        <div data-dropdown-container="" className="relative overflow-hidden max-desktop:h-full max-desktop:overflow-auto">
          <div data-dropdown-bg="" className="will-change-transform bg-white rounded-b-[0.25em] absolute inset-0 max-desktop:hidden" />

          {NAV_PANELS.map((panel) => (
            <div
              key={panel.name}
              data-nav-content={panel.name}
              role="region"
              aria-label={`${panel.name} menu`}
              className="opacity-0 pointer-events-none invisible absolute top-0 right-0 left-0 overflow-hidden max-desktop:bg-white max-desktop:bottom-0 max-desktop:overflow-auto"
            >
              <div className="flex max-desktop:flex-col">
                {panel.columns.map((col, i) => (
                  <div
                    key={i}
                    data-menu-fade=""
                    className={cn(PANEL_COL, col.highlighted && "bg-[#f7f5ff]")}
                  >
                    <span
                      data-menu-fade=""
                      className="uppercase pl-[1em] font-haffer-mono text-[0.75em] leading-none max-desktop:w-full"
                    >
                      {col.heading}
                    </span>
                    <ul className="flex flex-col justify-start items-stretch w-full">
                      {col.links.map((link) => (
                        <li key={link.label} data-menu-fade="">
                          <a href={link.href} className={PANEL_LINK}>
                            <span className="font-medium">{link.label}</span>
                            {link.description && (
                              <span className="opacity-60 text-[0.875em] font-normal">
                                {link.description}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {panel.featured && (
                  <div
                    data-menu-fade=""
                    className={cn(PANEL_COL, "bg-[#f7f5ff] pt-[1.5em] pb-[1.5em] max-xs:p-0")}
                  >
                    <div className="bg-white rounded-[0.5em] flex flex-col w-full overflow-hidden max-xs:border-b max-xs:border-black/10 max-xs:rounded-none">
                      <div className="w-full h-[16.25em] relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={panel.featured.imageSrc}
                          loading="lazy"
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="gap-[1.25em] flex flex-col justify-start items-start p-[1.5em] max-xs:p-[1em] max-xs:pb-[1.5em]">
                        <div className="gap-[0.125em] flex flex-col justify-start items-start">
                          <span className="font-medium">{panel.featured.title}</span>
                          <span className="opacity-60 text-[0.875em] font-normal">
                            {panel.featured.subtitle}
                          </span>
                        </div>
                        <a
                          href={panel.featured.ctaHref}
                          className="text-[#f2f2f2] cursor-pointer bg-[#6840ff] rounded-[0.25em] justify-center items-center py-[0.375em] px-[0.625em] no-underline flex"
                        >
                          <span className="text-[0.9375em] font-medium leading-[1.2] max-xs:text-base">
                            {panel.featured.ctaLabel}
                          </span>
                          <ChevronRight className="w-[1.25em] max-xs:w-[1.375em]" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div data-menu-backdrop="" className="z-0 opacity-0 pointer-events-none invisible bg-black/25 fixed inset-0 max-desktop:hidden" />
    </nav>
  )
}

/* ── Types ─────────────────────────────────────────────── */

interface NavPanelLink {
  label: string
  description?: string
  href: string
}

interface NavPanelColumn {
  heading: string
  links: NavPanelLink[]
  highlighted?: boolean
}

interface NavFeaturedCard {
  imageSrc: string
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
}

interface NavPanel {
  name: string
  label: string
  columns: NavPanelColumn[]
  featured?: NavFeaturedCard
}

interface NavLink {
  label: string
  href: string
}

interface NavCta {
  label: string
  href: string
  variant: "outline" | "filled"
}
