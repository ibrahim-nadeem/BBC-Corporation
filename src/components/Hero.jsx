import { useEffect } from 'react'
import gsap from 'gsap'
import { BRAND } from '../data.js'
import './Hero.css'

export default function Hero({ ready }) {
  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-in > *', { y: 60, opacity: 0, stagger: 0.14, duration: 1.2, ease: 'power3.out', delay: 0.5 })
    })
    return () => ctx.revert()
  }, [ready])
  return (
    <header className="hero" id="top">
      <div className="hero-grid" />
      <i className="beam b1" /><i className="beam b2" /><i className="beam b3" />
      <div className="hero-in wrap">
        <img className="hero-logo" src={BRAND.logo} alt={BRAND.name} />
        <p className="hero-tag">“{BRAND.tagline}”</p>
        <p className="hero-loc">Located in Lahore, Pakistan</p>
        <div className="hero-btns">
          <a className="btn" href="#portfolio">View Event Portfolio</a>
          <a className="btn ghost" href="#contact">Contact Us</a>
        </div>
        <span className="hero-scroll">Scroll</span>
      </div>
    </header>
  )
}
