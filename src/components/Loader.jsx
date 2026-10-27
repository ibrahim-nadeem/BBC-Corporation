import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { BRAND } from '../data.js'
import './Loader.css'

export default function Loader({ onDone }) {
  const [n, setN] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const o = { v: 0 }
    const tl = gsap.timeline()
    tl.from('.ld-logo', { scale: 0.85, opacity: 0, duration: 1, ease: 'power3.out' })
      .to(o, { v: 100, duration: 2.2, ease: 'power1.inOut', onUpdate: () => setN(Math.round(o.v)) }, 0)
      .to('.ld-bar i', { scaleX: 1, duration: 2.2, ease: 'power1.inOut' }, 0)
      .to(ref.current, { yPercent: -100, duration: 1.1, ease: 'power4.inOut', delay: 0.3, onStart: onDone })
      .set(ref.current, { display: 'none' })
    return () => tl.kill()
  }, [])
  return (
    <div className="loader" ref={ref}>
      <div className="ld-in">
        <img className="ld-logo" src={BRAND.logo} alt={BRAND.name} />
        <div className="ld-bar"><i /></div>
        <div className="ld-n">{n}%</div>
      </div>
    </div>
  )
}
