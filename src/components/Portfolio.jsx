import { useEffect, useState } from 'react'
import { PORTFOLIO } from '../data.js'
import './Portfolio.css'

export default function Portfolio() {
  const [open, setOpen] = useState(null)
  useEffect(() => {
    const k = e => e.key === 'Escape' && setOpen(null)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [])
  return (
    <section className="sec" id="portfolio">
      <div className="wrap">
        <h2 className="rv">Event <span className="hl">Portfolio</span></h2>
        <div className="pf-grid">
          {PORTFOLIO.map((e, i) => (
            <button key={e.client} className={'pf-card rv' + (i % 5 === 0 ? ' wide' : '')} onClick={() => setOpen(e)}>
              <img className="pf-img" src={e.src} alt={`${e.client}: ${e.title}`} loading="lazy" />
              <span className="pf-cap"><span className="pf-logo"><img src={e.logo} alt={e.client} /></span><small>{e.title}</small></span>
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div className="pf-lb" onClick={() => setOpen(null)} role="dialog" aria-label={open.client}>
          <img src={open.src} alt={open.title} />
          <p>{open.client} · {open.title}</p>
        </div>
      )}
    </section>
  )
}
