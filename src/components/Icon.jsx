// Small line-icon set used across sections (24x24, currentColor)
const P = {
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z',
  gear: 'M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M9.5 12.2l1.7 1.7 3.3-3.6M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',
  people: 'M9 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.5a2.5 2.5 0 1 1 0 5M16 14.2c3 .3 5 2.4 5 5.8',
  hand: 'M2 8h3v9H2zM19 8h3v9h-3zM5 9l4-2h3l2 2 2-1 3 1v7l-3 1-3-1-3 2-3-2-3-1M9 13l3 2',
  box: 'M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8',
  cal: 'M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4',
  pen: 'M4 20l1-4L16 5l3 3L8 19zM14 7l3 3',
  person: 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8',
  pin: 'M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  sound: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM12 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  stage: 'M3 5h18v10H3zM12 15v4M8 19h8M7 9h10',
  store: 'M3 9l2-5h14l2 5M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v7h14v-7',
  board: 'M3 4h18v11H3zM7 20l5-5 5 5M8 8h8M8 11h5',
  rocket: 'M12 3c4 2 6 6 6 10l-3 3H9l-3-3c0-4 2-8 6-10zM9 16l-2 5 5-2M15 16l2 5-5-2M12 8.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z',
  trophy: 'M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 21h8M10 18h4',
  dinner: 'M3 17h18M5 17a7 7 0 0 1 14 0M12 7V5M2 20h20',
  mega: 'M3 10v4l11 5V5zM14 8a4 4 0 0 1 0 8M6 14l1 5h3l-1-4',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  party: 'M12 3c3 0 5 2.5 5 5.5S14.5 14 12 14 7 11.5 7 8.5 9 3 12 3zM12 14l-1 2 2 2-2 3M5 20l2-1M19 20l-2-1',
}
export default function Icon({ name, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[name]} /></svg>
  )
}
