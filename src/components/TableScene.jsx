import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TableScene.css'

gsap.registerPlugin(ScrollTrigger)

/* ---------- Layout data (SVG units, viewBox 1200 x 675) ---------- */

const ROWS = [
  { y: 410, s: 0.62, xs: [290, 470, 730, 910] },
  { y: 490, s: 0.8, xs: [200, 455, 745, 1000] },
  { y: 590, s: 1, xs: [90, 390, 810, 1110] },
]
const TABLES = ROWS.flatMap((r) => r.xs.map((x) => ({ x, y: r.y, s: r.s })))

// Seated audience: one person per chair (back-left, back-right, left, right)
const SEATS = [
  { x: -34, y: -27, side: false },
  { x: 34, y: -27, side: false },
  { x: -70, y: 4, side: true },
  { x: 70, y: 4, side: true },
]
const OUTFITS = ['#2b3a55', '#4a2f3a', '#2f4a45', '#3a3350', '#5a4630', '#6b3a4a', '#33445c']
const SKINS = ['#d8b79a', '#c4966f', '#8d5b3f', '#e8c9ac', '#a9774f']

// Setup crew: [x, y, scale, how far they walk]
const CREW = [
  [160, 625, 1.1, 150],
  [1040, 530, 0.85, -170],
  [600, 392, 0.6, 70],
]

const LAMPS = [300, 450, 600, 750, 900]

const STEPS = [
  ['venue', 'Venue & floor plan', 'Hall is empty. Floor plan marked, table positions fixed.'],
  ['stage', 'Stage & aisle', 'Stage platform built and red carpet laid.'],
  ['wall', 'Backdrop & media', 'Backdrop wall up, LED screens tested.'],
  ['light', 'Lighting', 'Truss rigged and stage lights focused.'],
  ['mic', 'Podium & mic', 'Podium placed on stage. Mic checked and live.'],
  ['tables', 'Tables & linen', 'Round tables dressed with linen and place settings.'],
  ['flowers', 'Chairs & flowers', 'Chairs placed. Centerpieces and stage florals set.'],
  ['guests', 'Audience seated', 'Crew steps back. Guests take their seats and the event is live.'],
]

/* ---------- SVG pieces ---------- */

function Bouquet({ big = false }) {
  const k = big ? 1.9 : 1
  return (
    <g className="flw" transform={`scale(${k})`}>
      <rect x="-3" y="-14" width="6" height="12" rx="2" fill="#c9a55a" />
      <circle cx="-10" cy="-26" r="4" fill="#6f9f7a" />
      <circle cx="10" cy="-26" r="4" fill="#6f9f7a" />
      <circle cx="-7" cy="-20" r="6" fill="#e8a0b4" />
      <circle cx="7" cy="-20" r="6" fill="#f2d38a" />
      <circle cx="-5" cy="-29" r="5" fill="#f2b6c4" />
      <circle cx="5" cy="-29" r="5" fill="#f4efe6" />
      <circle cx="0" cy="-26" r="7" fill="#f4efe6" />
      <circle cx="0" cy="-26" r="2.6" fill="#e8a0b4" />
    </g>
  )
}

function Table({ x, y, s, n }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="chr">
        <rect x="-80" y="-8" width="20" height="24" rx="6" fill="url(#tsChair)" />
        <rect x="60" y="-8" width="20" height="24" rx="6" fill="url(#tsChair)" />
        <rect x="-46" y="-36" width="24" height="17" rx="6" fill="url(#tsChair)" />
        <rect x="22" y="-36" width="24" height="17" rx="6" fill="url(#tsChair)" />
      </g>
      {SEATS.map((st, k) => (
        <g key={k} className="aud">
          <rect
            x={st.x - 10}
            y={st.y - 24}
            width="20"
            height={st.side ? 30 : 40}
            rx="8"
            fill={OUTFITS[(n * 4 + k * 3) % OUTFITS.length]}
          />
          <circle cx={st.x} cy={st.y - 33} r="8.5" fill={SKINS[(n * 3 + k * 2 + 1) % SKINS.length]} />
        </g>
      ))}
      <g className="tbl">
        <ellipse cx="0" cy="46" rx="74" ry="14" fill="#000" opacity=".4" />
        <path d="M-56 0 L-66 42 Q0 66 66 42 L56 0 Z" fill="url(#tsCloth)" />
        <ellipse cx="0" cy="0" rx="58" ry="17" fill="url(#tsTop)" />
        <ellipse cx="0" cy="0" rx="40" ry="10" fill="none" stroke="#c9a55a" strokeOpacity=".5" />
        {[[-38, 3], [38, 3], [-20, -9], [20, -9], [-20, 11], [20, 11]].map(([px, py], i) => (
          <ellipse key={i} cx={px} cy={py} rx="7" ry="2.6" fill="#fff" opacity=".9" />
        ))}
        <Bouquet />
      </g>
    </g>
  )
}

function Podium() {
  return (
    <g transform="translate(745 321)">
      <g className="pod">
        <ellipse cx="0" cy="2" rx="40" ry="6" fill="#000" opacity=".4" />
        <path d="M-30 -50 L30 -50 L26 0 L-26 0 Z" fill="url(#tsWood)" />
        <polygon points="-34,-50 34,-50 30,-57 -30,-57" fill="#6a5238" />
        <rect x="-9" y="-40" width="18" height="12" rx="2" fill="#c9a55a" />
        {/* gooseneck mic */}
        <path d="M0 -57 Q-2 -78 -12 -88" fill="none" stroke="#9a9aa6" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="-14" cy="-91" rx="4.5" ry="6" transform="rotate(35 -14 -91)" fill="#1a1a22" stroke="#c9a55a" />
        {/* live light */}
        <circle className="live" cx="-25" cy="-53" r="9" fill="#e5484d" fillOpacity=".25" />
        <circle className="live" cx="-25" cy="-53" r="3" fill="#e5484d" />
      </g>
    </g>
  )
}

function Crew({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="wrk">
        <ellipse cx="0" cy="2" rx="15" ry="4" fill="#000" opacity=".4" />
        <rect x="-11" y="-38" width="22" height="38" rx="8" fill="#2f2f3a" />
        <rect x="-11" y="-34" width="22" height="22" rx="6" fill="#e8742a" />
        <rect x="-11" y="-26" width="22" height="3" fill="#f4efe6" opacity=".8" />
        <circle cx="0" cy="-47" r="9" fill="#d8b79a" />
        <path d="M-10 -49 Q0 -62 10 -49 Z" fill="#f2d38a" />
        <rect x="8" y="-26" width="18" height="14" rx="2" fill="#a07a45" />
      </g>
    </g>
  )
}

/* ---------- Component ---------- */

export default function TableScene() {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const progressRef = useRef(null)
  const stepRef = useRef(null)
  const descRef = useRef(null)
  const checkRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const q = (sel) => gsap.utils.toArray(sel, section)
      const items = checkRef.current ? Array.from(checkRef.current.children) : []

      const setStep = (idx) => {
        if (stepRef.current) stepRef.current.textContent = `${idx + 1}/${STEPS.length}  ${STEPS[idx][1]}`
        if (descRef.current) descRef.current.textContent = STEPS[idx][2]
        items.forEach((li, i) => {
          li.dataset.state = i < idx ? 'done' : i === idx ? 'on' : 'todo'
        })
      }

      // Reduced motion: show the finished hall, no pin, no scrubbing.
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(q('.mk, .dim, .wrk'), { opacity: 0 })
        setStep(STEPS.length - 1)
        items.forEach((li) => (li.dataset.state = 'done'))
        return
      }

      // Starting state
      gsap.set(q('.stg'), { y: 40, opacity: 0 })
      gsap.set(q('.carpet'), { scaleY: 0, transformOrigin: '50% 0%' })
      gsap.set(q('.wall'), { scaleY: 0, transformOrigin: '50% 100%' })
      gsap.set(q('.led'), { opacity: 0 })
      gsap.set(q('.truss'), { y: -90, opacity: 0 })
      gsap.set(q('.beam'), { opacity: 0 })
      gsap.set(q('.tbl'), { scale: 0, opacity: 0, transformOrigin: '50% 50%' })
      gsap.set(q('.chr'), { opacity: 0, y: 8 })
      gsap.set(q('.flw'), { scale: 0, transformOrigin: '50% 100%' })
      gsap.set(q('.aud'), { opacity: 0, y: -16 })
      gsap.set(q('.pod'), { opacity: 0, y: -26 })
      gsap.set(q('.live'), { opacity: 0 })
      gsap.set(q('.wrk'), { opacity: 0 })
      gsap.set(q('.glow'), { opacity: 0 })
      gsap.set(q('.dim'), { opacity: 0.55 })

      // LED shimmer (starts only matters once screens are on)
      gsap.fromTo(q('.shine'), { x: 280 }, { x: 900, duration: 3.2, repeat: -1, repeatDelay: 1.8, ease: 'none' })

      let current = -1
      const tl = gsap.timeline({
        defaults: { ease: 'power1.out' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=3800',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`
            const t = self.progress * tl.duration()
            let idx = 0
            STEPS.forEach(([label], i) => {
              if (t >= tl.labels[label] - 0.001) idx = i
            })
            if (idx !== current) {
              current = idx
              setStep(idx)
            }
          },
        },
      })

      tl.addLabel('venue').to({}, { duration: 0.8 })

      tl.addLabel('stage')
        .to(q('.stg'), { y: 0, opacity: 1, duration: 1.2 })
        .to(q('.carpet'), { scaleY: 1, duration: 1.2 }, '<0.3')
        .to(q('.wrk'), { opacity: 1, duration: 0.5, stagger: 0.2 }, 'stage')
        .to(q('.wrk'), { x: (i) => CREW[i][3], duration: 5, ease: 'none' }, 'stage+=0.4')

      tl.addLabel('wall')
        .to(q('.wall'), { scaleY: 1, duration: 1.3 })
        .to(q('.led'), { opacity: 1, duration: 0.8, stagger: 0.3 })

      tl.addLabel('light')
        .to(q('.truss'), { y: 0, opacity: 1, duration: 1 })
        .to(q('.beam'), { opacity: 1, duration: 0.8, stagger: 0.15 })
        .to(q('.dim'), { opacity: 0, duration: 1.2 }, '<0.2')

      tl.addLabel('mic')
        .to(q('.pod'), { opacity: 1, y: 0, duration: 0.9 })
        .to(q('.live'), { opacity: 1, duration: 0.4, stagger: 0.15 })

      tl.addLabel('tables')
        .to(q('.tbl'), { scale: 1, opacity: 1, duration: 0.5, stagger: 0.14, ease: 'back.out(1.4)' })
        .to(q('.mk'), { opacity: 0, duration: 0.8 }, '<')

      tl.addLabel('flowers').to(q('.chr'), { opacity: 1, y: 0, duration: 0.4, stagger: 0.07 })
      tl.to(q('.flw'), { scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' }, '>')

      tl.addLabel('guests')
        .to(q('.wrk'), { opacity: 0, x: '+=50', duration: 0.6, stagger: 0.1 })
        .to(q('.aud'), { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: 'back.out(1.7)' }, '<0.3')
        .to(q('.glow'), { opacity: 1, duration: 1 }, '<')

      tl.to({}, { duration: 0.8 })

      // One slow camera push across the whole sequence
      tl.fromTo(
        svgRef.current,
        { scale: 1.1, transformOrigin: '50% 65%' },
        { scale: 1, duration: tl.duration(), ease: 'none' },
        0
      )

      setStep(0)
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section className="ts" ref={sectionRef}>
      <div className="ts-heading">
        <span className="ts-eyebrow">Business Bridge Corporation</span>
        <h2>Every detail. One experience.</h2>
        <p>Watch the hall come together, from bare floor to opening night.</p>
      </div>

      <div className="ts-visual">
        <svg
          ref={svgRef}
          viewBox="0 0 1200 675"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Event hall being set up: stage, backdrop wall, media screens, lighting, tables, flowers and guests"
        >
          <defs>
            <linearGradient id="tsLed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7a2e4d" />
              <stop offset="1" stopColor="#c9a55a" />
            </linearGradient>
            <linearGradient id="tsBeam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f2d38a" stopOpacity=".5" />
              <stop offset="1" stopColor="#f2d38a" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="tsGlow" cx="50%" cy="45%" r="60%">
              <stop offset="0" stopColor="#f2d38a" stopOpacity=".2" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="tsCloth" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#bdb5a3" />
              <stop offset=".5" stopColor="#f0eadc" />
              <stop offset="1" stopColor="#bdb5a3" />
            </linearGradient>
            <radialGradient id="tsTop" cx="50%" cy="40%" r="70%">
              <stop offset="0" stopColor="#fffaf0" />
              <stop offset="1" stopColor="#e2dac8" />
            </radialGradient>
            <linearGradient id="tsChair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#a8864a" />
              <stop offset="1" stopColor="#6e5428" />
            </linearGradient>
            <linearGradient id="tsFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity=".07" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tsWood" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#6a5238" />
              <stop offset=".5" stopColor="#3d2f20" />
              <stop offset="1" stopColor="#6a5238" />
            </linearGradient>
            <clipPath id="tsLedClip">
              <rect x="340" y="108" width="520" height="168" />
            </clipPath>
          </defs>

          {/* Hall shell */}
          <rect width="1200" height="675" fill="#101016" />
          <rect width="1200" height="345" fill="#171720" />
          {Array.from({ length: 15 }, (_, i) => (
            <rect key={i} x={i * 80 + 6} y="0" width="68" height="345" fill="#1b1b26" />
          ))}
          <rect y="345" width="1200" height="330" fill="#1d1d27" />
          <rect y="345" width="1200" height="330" fill="url(#tsFloor)" />
          {Array.from({ length: 13 }, (_, i) => {
            const bx = -600 + i * 200
            return <line key={i} x1="600" y1="345" x2={bx} y2="675" stroke="#262633" strokeWidth="1" />
          })}
          <path d="M0 345 H1200" stroke="#2a2a36" strokeWidth="2" />

          {/* Floor marks */}
          <g className="mk">
            {TABLES.map((t, i) => (
              <ellipse
                key={i}
                cx={t.x}
                cy={t.y + 6 * t.s}
                rx={62 * t.s}
                ry={20 * t.s}
                fill="none"
                stroke="#c9a55a"
                strokeOpacity=".55"
                strokeDasharray="5 5"
              />
            ))}
          </g>

          {/* Stage */}
          <g className="stg">
            <polygon points="270,292 930,292 970,322 230,322" fill="#2e2e3b" />
            <rect x="230" y="322" width="740" height="24" fill="#23232e" />
            <rect x="230" y="322" width="740" height="3" fill="#c9a55a" />
            <rect x="250" y="336" width="700" height="3" fill="#f2d38a" opacity=".7" />
          </g>

          <polygon className="carpet" points="555,346 645,346 735,675 465,675" fill="#7a2336" />

          {/* Backdrop wall and screen frames */}
          <g className="wall">
            <rect x="320" y="90" width="560" height="204" fill="#262633" stroke="#c9a55a" strokeWidth="2" />
            <rect x="110" y="140" width="160" height="150" fill="#262633" stroke="#c9a55a" strokeWidth="2" />
            <rect x="930" y="140" width="160" height="150" fill="#262633" stroke="#c9a55a" strokeWidth="2" />
          </g>

          {/* Venue is dim until lighting step */}
          <rect className="dim" width="1200" height="675" fill="#05050a" />

          {/* Media */}
          <g className="led">
            <rect x="340" y="108" width="520" height="168" fill="url(#tsLed)" />
            <path d="M545 158 Q600 118 655 158" fill="none" stroke="#f4efe6" strokeWidth="3" opacity=".9" />
            <text x="600" y="203" textAnchor="middle" fill="#f4efe6" fontSize="34" fontFamily="Georgia, serif">
              Business Bridge
            </text>
            <text x="600" y="235" textAnchor="middle" fill="#f4efe6" fontSize="16" fontFamily="Georgia, serif" opacity=".8">
              Corporate Expo 2026
            </text>
            <g clipPath="url(#tsLedClip)">
              <polygon className="shine" points="0,108 70,108 30,276 -40,276" fill="#fff" opacity=".14" />
            </g>
          </g>
          <g className="led">
            <rect x="122" y="152" width="136" height="126" fill="#3d2a52" />
            <text x="190" y="222" textAnchor="middle" fill="#f4efe6" fontSize="15" fontFamily="Georgia, serif">Live</text>
          </g>
          <g className="led">
            <rect x="942" y="152" width="136" height="126" fill="#3d2a52" />
            <text x="1010" y="222" textAnchor="middle" fill="#f4efe6" fontSize="15" fontFamily="Georgia, serif">Live</text>
          </g>

          {/* Stage florals */}
          <g transform="translate(285 300)"><Bouquet big /></g>
          <g transform="translate(915 300)"><Bouquet big /></g>

          {/* Podium with mic */}
          <Podium />

          {/* Truss and beams */}
          {LAMPS.map((x) => {
            const d = (x - 600) * 0.15
            return (
              <polygon
                key={x}
                className="beam"
                points={`${x - 6},58 ${x + 6},58 ${x + d + 80},345 ${x + d - 80},345`}
                fill="url(#tsBeam)"
              />
            )
          })}
          <g className="truss">
            <rect x="200" y="36" width="800" height="10" fill="#3a3a48" />
            {LAMPS.map((x) => (
              <circle key={x} cx={x} cy="54" r="7" fill="#f2d38a" />
            ))}
          </g>

          {/* Tables */}
          {TABLES.map((t, i) => (
            <Table key={i} n={i} {...t} />
          ))}

          {/* Crew (setup team) */}
          {CREW.map(([x, y, s], i) => (
            <Crew key={i} x={x} y={y} s={s} />
          ))}



          <rect className="glow" width="1200" height="675" fill="url(#tsGlow)" />
        </svg>

        <ol className="ts-check" ref={checkRef} aria-label="Setup progress">
          {STEPS.map(([key, title]) => (
            <li key={key} data-state="todo">{title}</li>
          ))}
        </ol>

        <div className="ts-vignette" />
      </div>

      <div className="ts-footer">
        <div>
          <span ref={stepRef} className="ts-step">1/8  Venue &amp; floor plan</span>
          <span ref={descRef} className="ts-desc">Hall is empty. Floor plan marked, table positions fixed.</span>
        </div>
        <span className="ts-hint">Scroll to build the hall</span>
      </div>

      <div className="ts-progress">
        <div ref={progressRef} />
      </div>
    </section>
  )
}