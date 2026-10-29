import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { BRAND } from '../data.js'
import './Navbar.css'

const LINKS = [['Mission', '#mission', 'hand'], ['Vision', '#vision', 'star'], ['Services', '#services', 'stage'], ['Clients', '#clients', 'people'], ['Portfolio', '#portfolio', 'board'], ['Team', '#team', 'person']]
const BREAK = 1100 // keep in sync with the media query in Navbar.css

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const f = () => setSolid(scrollY > 40)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])

  // Lock page scroll while the menu is open; close on Escape or when resized to desktop
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    const key = e => e.key === 'Escape' && close()
    const size = () => innerWidth > BREAK && close()
    addEventListener('keydown', key); addEventListener('resize', size)
    return () => { document.documentElement.classList.remove('menu-open'); removeEventListener('keydown', key); removeEventListener('resize', size) }
  }, [open])

  return (
    <>
      <nav className={'nav' + (solid ? ' solid' : '') + (open ? ' open' : '')}>
        <a href="#top" className="nav-brand" onClick={close} aria-label="Business Bridge Corporate, home"><img src={BRAND.logoNav} alt="Business Bridge Corporate" /></a>
        <div className="nav-links">
          {LINKS.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
          <a href="#contact" className="nav-cta">Contact Us</a>
        </div>
        <button className="nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
          <span /><span />
        </button>
      </nav>

      <div id="mobile-menu" className={'mm' + (open ? ' open' : '')} aria-hidden={!open} data-lenis-prevent>
        <div className="mm-in">
          <div className="mm-grid">
            {LINKS.map(([t, h, ic], i) => (
              <a key={t} href={h} style={{ '--i': i }} tabIndex={open ? 0 : -1} onClick={close}><Icon name={ic} size={26} /><span>{t}</span></a>
            ))}
          </div>
          <a href="#contact" className="mm-cta" style={{ '--i': LINKS.length }} tabIndex={open ? 0 : -1} onClick={close}>Contact Us</a>
          <p className="mm-foot" style={{ '--i': LINKS.length + 1 }}>{BRAND.insta}</p>
        </div>
      </div>
    </>
  )
}
