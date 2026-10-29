import { TEAM } from '../data.js'
import './Team.css'

export default function Team() {
  return (
    <section className="sec" id="team">
      <div className="wrap">
        <h2 className="rv">Our Team</h2>
        <div className="tm-grid">
          {TEAM.map(([n, r, f]) => (
            <div key={n} className="tm rv"><div className="tm-ph"><img src={`/images/team/${f}.jpg`} alt={n} loading="lazy" /></div><h3>{n}</h3><p>{r}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
