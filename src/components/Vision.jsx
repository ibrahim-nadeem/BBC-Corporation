import { VISION } from '../data.js'
import './Vision.css'

export default function Vision() {
  return (
    <section className="sec" id="vision">
      <div className="glow" style={{ width: 500, height: 500, background: 'rgba(156,195,255,.12)', left: '-10%', top: '10%' }} />
      <div className="wrap">
        <h2 className="rv">Vision</h2>
        <p className="sub rv">{VISION.short}</p>
        <div className="vi-img rv"><img className="par" src={VISION.image} alt="Our vision: a staircase from 2022 to 2030 across Pakistan" loading="lazy" /></div>
        <p className="vi-long rv">{VISION.long}</p>
        <div className="vi-steps">
          {VISION.years.map(([y, t], i) => (
            <div key={y} className="vi-st rv" style={{ '--i': i }}><b>{y}</b><span>{t}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}
