import { CLIENTS } from '../data.js'
import './Clients.css'

const half = Math.ceil(CLIENTS.length / 2)
const Row = ({ items, rev }) => (
  <div className={'cl-row' + (rev ? ' rev' : '')}>
    <div className="cl-track">
      {[...items, ...items].map((c, i) => <img key={i} src={c.src} alt={c.name} title={c.name} loading="lazy" />)}
    </div>
  </div>
)

export default function Clients() {
  return (
    <section className="sec" id="clients">
      <div className="wrap"><h2 className="rv">Our Clients</h2></div>
      <div className="cl-rows rv"><Row items={CLIENTS.slice(0, half)} /><Row items={CLIENTS.slice(half)} rev /></div>
    </section>
  )
}
