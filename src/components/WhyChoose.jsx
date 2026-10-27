import Icon from './Icon.jsx'
import { WHY } from '../data.js'
import './WhyChoose.css'

const IC = ['cal', 'bulb', 'trophy', 'person', 'pin', 'sound']

export default function WhyChoose() {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <h2 className="rv">Why Choose <span className="hl">Business Bridge Corporate?</span></h2>
        <div className="wy">
          <div className="wy-img rv"><img src={WHY.image} alt="Business Bridge Corporate crystal award" loading="lazy" /></div>
          <div className="wy-list">
            {WHY.items.map(([t, d], i) => (
              <div key={t} className="fl rv" tabIndex={0}>
                <div className="fl-in">
                  <div className="fl-f"><Icon name={IC[i]} size={34} /><h3>{t}</h3></div>
                  <div className="fl-b"><p>{d}</p></div>
                </div>
              </div>
            ))}
            <p className="wy-hint">Tap a card to flip</p>
          </div>
        </div>
        <div className="wy-stats">
          {WHY.stats.map(([n, s, l]) => <div key={l} className="rv"><b data-n={n} data-s={s}>{n}{s}</b><span>{l}</span></div>)}
        </div>
      </div>
    </section>
  )
}
