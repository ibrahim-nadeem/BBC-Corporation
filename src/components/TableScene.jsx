import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TableScene.css'
gsap.registerPlugin(ScrollTrigger)

const BOOTHS = [['EXPO', '#4f8dff'], ['LAUNCH', '#d9bd8f'], ['SUMMIT', '#2ec4b6'], ['AWARDS', '#d9bd8f'], ['BRAND', '#4f8dff'], ['FORUM', '#2ec4b6']]
const BANNERS = ['CONFERENCE', 'EXPO', 'PRODUCT LAUNCH', 'AWARDS', 'EXHIBITION', 'SEMINAR']

// Back layer: truss with spotlights, LED video walls and hanging banners
function Back() {
  const zig = Array.from({ length: 100 }, (_, i) => `M${i * 30} 8L${i * 30 + 15} 34L${i * 30 + 30} 8`).join('')
  return (
    <svg viewBox="0 0 3000 420" aria-hidden="true">
      <defs>
        <linearGradient id="led" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b4fd8" /><stop offset=".55" stopColor="#0f2c7a" /><stop offset="1" stopColor="#4a2bc8" /></linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe0ff" stopOpacity=".3" /><stop offset="1" stopColor="#cfe0ff" stopOpacity="0" /></linearGradient>
      </defs>
      {Array.from({ length: 6 }, (_, i) => (
        <g key={i} transform={`translate(${130 + i * 490},64)`}>
          <rect width="360" height="190" rx="6" fill="url(#led)" stroke="rgba(156,195,255,.4)" />
          <path d="M90 0V190M180 0V190M270 0V190M0 63H360M0 126H360" stroke="rgba(255,255,255,.08)" />
          {Array.from({ length: 8 }, (_, j) => { const h = 30 + ((j * 37 + i * 23) % 100); return <rect key={j} className="tw" style={{ animationDelay: (j * 0.25 + i * 0.4) % 3 + 's' }} x={22 + j * 41} y={176 - h} width="26" height={h} fill="rgba(156,195,255,.45)" /> })}
          <text x="180" y="44" textAnchor="middle" fill="#fff" opacity=".9" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="22" letterSpacing="6">{BANNERS[i]}</text>
        </g>
      ))}
      {Array.from({ length: 12 }, (_, i) => <path key={'b' + i} className="tw" style={{ animationDelay: (i % 5) * 0.5 + 's' }} d={`M${150 + i * 250} 34L${60 + i * 250} 330H${240 + i * 250}Z`} fill="url(#beam)" />)}
      <rect y="6" width="3000" height="30" fill="#0b1a40" /><path d={zig} stroke="#6f93d6" strokeWidth="2" fill="none" /><rect y="6" width="3000" height="3" fill="#9cc3ff" /><rect y="33" width="3000" height="3" fill="#9cc3ff" />
      {Array.from({ length: 12 }, (_, i) => <g key={'s' + i}><rect x={136 + i * 250} y="36" width="28" height="16" rx="3" fill="#0b1a40" stroke="#9cc3ff" /><circle cx={150 + i * 250} cy="58" r="6" fill="#fff6d8" className="tw" /></g>)}
    </svg>
  )
}

const Person = ({ x, s = 1, c = '#16296a' }) => (
  <g transform={`translate(${x},394) scale(${s})`}>
    <circle cx="0" cy="-122" r="12" fill="#dfe8fb" /><path d="M-22 0V-70a22 22 0 0 1 44 0V0z" fill={c} /><path d="M-7 -104L0 -84L7 -104z" fill="#fff" /><path d="M0 -92V-62" stroke="#d9bd8f" strokeWidth="2" />
  </g>
)

// Front layer: expo booths, roll-up banners, visitors, and the main stage
function Front() {
  return (
    <svg viewBox="0 0 3000 420" aria-hidden="true">
      <defs>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#14275a" /><stop offset="1" stopColor="#050d22" /></linearGradient>
        <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2f7bff" /><stop offset="1" stopColor="#6a3cff" /></linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3dfae" /><stop offset=".5" stopColor="#c9a569" /><stop offset="1" stopColor="#f0d9a8" /></linearGradient>
      </defs>
      <rect y="394" width="3000" height="26" fill="url(#floor)" /><rect y="394" width="3000" height="2" fill="#9cc3ff" opacity=".5" />
      {BOOTHS.map(([label, ac], i) => (
        <g key={label} transform={`translate(${70 + i * 430},0)`}>
          <rect y="118" width="330" height="276" fill="#0c1b44" stroke={ac} strokeOpacity=".5" />
          <rect y="118" width="330" height="26" fill={ac} />
          <text x="165" y="137" textAnchor="middle" fill="#04122e" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="15" letterSpacing="5">{label}</text>
          <rect x="28" y="164" width="140" height="86" rx="4" fill="url(#scr)" stroke="#cfe0ff" strokeOpacity=".5" className="tw" style={{ animationDelay: i * 0.4 + 's' }} />
          <path d="M44 232l24-30 22 18 26-38 34 50" stroke="#fff" strokeWidth="3" fill="none" opacity=".8" />
          <circle cx="250" cy="200" r="36" fill="none" stroke={ac} strokeWidth="3" /><path d="M234 218V184h16a9 9 0 0 1 0 17h-16h20a9 9 0 0 1 0 17z" fill="none" stroke={ac} strokeWidth="3" />
          <rect x="18" y="296" width="294" height="98" rx="4" fill="#f2f5fb" /><rect x="18" y="296" width="294" height="7" fill={ac} /><rect x="18" y="384" width="294" height="4" fill={ac} opacity=".9" />
          {[0, 1, 2].map(k => <rect key={k} x={40 + k * 34} y="270" width="22" height="26" fill="#fff" stroke="#c7d3ee" />)}
          <rect x="230" y="262" width="62" height="34" rx="3" fill="#0b1a40" />
          <g transform="translate(344,244)"><rect width="42" height="150" rx="3" fill="#0b1a40" stroke={ac} /><circle cx="21" cy="40" r="12" fill={ac} /><rect x="8" y="66" width="26" height="4" fill="#9cc3ff" /><rect x="8" y="78" width="18" height="4" fill="#9cc3ff" opacity=".6" /></g>
        </g>
      ))}
      <g transform="translate(262,394)"><path d="M0 0H-22L-28 -36H28L22 0z" fill="#1d3a86" stroke="#9cc3ff" strokeOpacity=".4" />{[[-26, -62, -35], [26, -66, 32], [-12, -96, -12], [14, -100, 14], [0, -120, 0]].map(([x, y, r], i) => <ellipse key={i} cx={x} cy={y} rx="12" ry="26" fill={i % 2 ? '#2f8f68' : '#3f9e72'} transform={`rotate(${r} ${x} ${y})`} />)}</g>
      {[[190, 1], [470, 0.95], [700, 1.05], [1060, 1], [1340, 0.95], [1600, 1.05], [1930, 1], [2200, 0.95], [2440, 1.05]].map(([x, s], i) => <Person key={i} x={x} s={s} c={i % 3 === 0 ? '#1d3a86' : i % 3 === 1 ? '#0e1f52' : '#2a2f6e'} />)}
      <g transform="translate(2640,0)">
        <rect x="-10" y="360" width="370" height="34" fill="#0b1a40" stroke="#9cc3ff" strokeOpacity=".5" /><rect x="-10" y="360" width="370" height="4" fill="url(#gold)" />
        <rect x="10" y="60" width="330" height="250" rx="6" fill="url(#led)" stroke="url(#gold)" strokeWidth="4" />
        {Array.from({ length: 9 }, (_, j) => { const h = 40 + ((j * 53) % 120); return <rect key={j} className="tw" style={{ animationDelay: j * 0.2 + 's' }} x={26 + j * 34} y={290 - h} width="22" height={h} fill="rgba(207,224,255,.4)" /> })}
        <text x="175" y="120" textAnchor="middle" fill="#fff" fontFamily="Playfair Display,serif" fontSize="30">Business Bridge</text>
        <text x="175" y="152" textAnchor="middle" fill="#9cc3ff" fontFamily="Poppins,sans-serif" fontSize="14" letterSpacing="8">CORPORATE</text>
        {[-4, 346].map(x => <g key={x}><rect x={x - 8} y="40" width="16" height="354" fill="#0b1a40" stroke="#9cc3ff" strokeOpacity=".6" /><circle cx={x} cy="34" r="10" fill="#fff6d8" className="tw" /></g>)}
        <rect x="-10" y="28" width="370" height="14" fill="#0b1a40" stroke="#9cc3ff" />
        <path d="M70 394V330h40V394" fill="#101f4d" stroke="url(#gold)" strokeWidth="3" /><rect x="64" y="322" width="52" height="10" fill="url(#gold)" />
        <rect x="150" y="386" width="190" height="8" fill="#9b1c3b" />
        <Person x={90} s={1} c="#0e1f52" />
      </g>
    </svg>
  )
}

export default function TableScene() {
  const sec = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      const front = sec.current.querySelector('.ts-front'), back = sec.current.querySelector('.ts-back')
      const dist = () => front.offsetWidth - innerWidth
      const tl = gsap.timeline({ scrollTrigger: { trigger: sec.current, start: 'top top', end: () => '+=' + front.offsetWidth * 0.95, pin: true, scrub: 1, invalidateOnRefresh: true } })
      tl.to(front, { x: () => -dist(), ease: 'none' }, 0).to(back, { x: () => -dist() * 0.4, ease: 'none' }, 0)
      gsap.from('.ts-txt > *', { opacity: 0, y: 30, stagger: 0.12, duration: 1, scrollTrigger: { trigger: sec.current, start: 'top 60%' } })
    }, sec)
    return () => ctx.revert()
  }, [])
  return (
    <section className="ts" ref={sec} aria-label="Corporate expo hall with booths, LED walls and a main stage">
      <div className="ts-txt wrap">
        <h2>Built for <span className="hl">expos & events</span></h2>
      </div>
      <div className="ts-layer ts-back"><Back /></div>
      <div className="ts-layer ts-front"><Front /></div>
    </section>
  )
}
