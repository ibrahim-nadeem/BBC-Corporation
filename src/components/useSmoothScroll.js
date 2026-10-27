import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)

// Premium smooth scroll (Lenis) wired to GSAP ScrollTrigger + reveal and counter animations.
export default function useSmoothScroll(ready) {
  useEffect(() => {
    if (!ready) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenis
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 })
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(t => lenis.raf(t * 1000))
      gsap.ticker.lagSmoothing(0)
    }
    const ctx = gsap.context(() => {
      gsap.set('.rv', { opacity: 0, y: 44 })
      ScrollTrigger.batch('.rv', { start: 'top 90%', once: true, onEnter: b => gsap.to(b, { opacity: 1, y: 0, stagger: 0.09, duration: 1, ease: 'power3.out' }) })
      gsap.utils.toArray('.par').forEach(el => gsap.to(el, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: el, scrub: true } }))
      gsap.utils.toArray('[data-n]').forEach(el => {
        const o = { v: 0 }, n = +el.dataset.n
        ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => gsap.to(o, { v: n, duration: 2.2, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(o.v) + (el.dataset.s || '')) }) })
      })
    })
    const click = e => {
      const a = e.target.closest('a[href^="#"]'); if (!a) return
      const t = document.querySelector(a.getAttribute('href')); if (!t) return
      e.preventDefault(); lenis ? lenis.scrollTo(t, { offset: -60 }) : t.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', click)
    const r = setTimeout(() => ScrollTrigger.refresh(), 800)
    return () => { clearTimeout(r); document.removeEventListener('click', click); ctx.revert(); lenis && lenis.destroy() }
  }, [ready])
}
