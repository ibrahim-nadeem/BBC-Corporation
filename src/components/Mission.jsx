import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { MISSION } from '../data.js'
import './Mission.css'

const ICONS = ['people', 'bulb', 'gear', 'hand', 'box']

export default function Mission() {
  const [a, setA] = useState(-1), [hold, setHold] = useState(false)
  useEffect(() => {
    if (hold) return
    const t = setInterval(() => setA(v => (v >= 4 ? -1 : v + 1)), 3200)
    return () => clearInterval(t)
  }, [hold])
  const cur = a < 0 ? null : MISSION.items[a]
  return (
    <section className="sec" id="mission">
      <div className="wrap">
        <div className="loc rv">
          <div>
            <h2>Located in</h2>
            <h2 className="hl">Lahore, Pakistan</h2>
          </div>
          <div className="map"><img src="/images/map.jpg" alt="Map of Punjab with Lahore, Pakistan marked" loading="lazy" /><i className="map-ring" /></div>
        </div>
        <h2 className="rv ms-title">Our <span className="hl">Mission</span></h2>
        <div className="ring rv" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
          <div className="ring-core">
            {cur ? <><h3>{cur[0]}</h3><p>{cur[1]}</p></> : <p className="stmt">{MISSION.statement}</p>}
          </div>
          {MISSION.items.map(([t], i) => (
            <button key={t} className={'node' + (a === i ? ' on' : '')} style={{ '--a': i * 72 + 'deg' }} onMouseEnter={() => setA(i)} onClick={() => { setHold(true); setA(i) }}>
              <Icon name={ICONS[i]} size={30} /><span>{t}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
