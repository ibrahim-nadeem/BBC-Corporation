import { useState } from 'react'
import { TEAM } from '../data.js'
import './Team.css'

// Looks for the photo in public/images/team/ first, then public/images/,
// and tries the common extensions, so .jpg / .jpeg / .png / .webp all work.
const DIRS = ['/images/team/', '/images/']
const EXT = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'PNG']
const candidates = file => DIRS.flatMap(d => EXT.map(e => `${d}${file}.${e}`))

function Photo({ file, name }) {
  const [i, setI] = useState(0)
  const list = candidates(file)
  // Nothing matched: show the first letter and print the expected path in the browser console
  if (i >= list.length) return <span className="tm-miss" title={`Missing photo: /images/team/${file}.jpg`}>{name[0]}</span>
  return (
    <img
      src={list[i]}
      alt={name}
      loading="lazy"
      onError={() => {
        if (i === list.length - 1) console.warn(`Team photo not found. Put it at: public/images/team/${file}.jpg`)
        setI(i + 1)
      }}
    />
  )
}

export default function Team() {
  return (
    <section className="sec" id="team">
      <div className="wrap">
        <h2 className="rv">Our Team</h2>
        <div className="tm-grid">
          {TEAM.map(([n, r, f]) => (
            <div key={n} className="tm rv">
              <div className="tm-ph"><Photo file={f} name={n} /></div>
              <h3>{n}</h3>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
