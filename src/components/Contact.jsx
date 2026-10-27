import { CONTACT, BRAND } from '../data.js'
import './Contact.css'

export default function Contact() {
  return (
    <section className="ct" id="contact">
      <div className="wrap">
        <img className="ct-logo rv" src={BRAND.logo} alt={BRAND.name} />
        <h2 className="rv">Contact Us</h2>
        <div className="ct-list">
          {CONTACT.map(([l, v, h]) => <a key={l} href={h} className="rv"><small>{l}</small><span>{v}</span></a>)}
        </div>
      </div>
    </section>
  )
}
