import { BRAND } from '../data.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="ft">
      <img className="ft-logo" src={BRAND.logoNav} alt={BRAND.name} />
      <h2>Thank You</h2>
      <p className="sub">“{BRAND.tagline}” · {BRAND.insta}</p>
    </footer>
  )
}
