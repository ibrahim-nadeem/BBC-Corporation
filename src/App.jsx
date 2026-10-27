import { useState } from 'react'
import useSmoothScroll from './components/useSmoothScroll.js'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TableScene from './components/TableScene.jsx'
import Mission from './components/Mission.jsx'
import Vision from './components/Vision.jsx'
import Services from './components/Services.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Clients from './components/Clients.jsx'
import Portfolio from './components/Portfolio.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Divider from './components/Divider.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ready, setReady] = useState(false)
  useSmoothScroll(ready)
  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Navbar />
      <Hero ready={ready} />
      <TableScene />
      <Mission />
      <Divider />
      <Vision />
      <Divider />
      <Services />
      <Divider />
      <WhyChoose />
      <Divider />
      <Clients />
      <Divider />
      <Portfolio />
      <Divider />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
