import Icon from './Icon.jsx'
import { SERVICES } from '../data.js'
import './Services.css'

const MAIN = ['stage', 'rocket', 'party', 'pen', 'store']
const SOL = ['stage', 'store', 'board', 'rocket', 'trophy', 'dinner', 'mega', 'cal']

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <h2 className="rv">Our <span className="hl">Services</span></h2>
        <div className="sv-grid">
          {SERVICES.list.map((s, i) => <div key={s} className="card rv"><span className="sv-ic"><Icon name={MAIN[i]} size={34} /></span><h3>{s}</h3></div>)}
        </div>
        <div className="sv-img rv"><img src={SERVICES.image} alt="Corporate event solutions from concept to perfect execution" loading="lazy" /></div>
        <div className="sv-sol">
          {SERVICES.solutions.map((s, i) => <div key={s} className="rv"><Icon name={SOL[i]} size={26} /><span>{s}</span></div>)}
        </div>
      </div>
    </section>
  )
}
