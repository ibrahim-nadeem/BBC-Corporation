// All content comes from the Business Bridge Corporate company profile PDF.
// Image paths point to /public/images (swap any file there to replace a photo).
export const BRAND = { name: 'Business Bridge Corporate', tagline: 'From Concept to Perfect Execution', insta: '@businessbridge.corporate', logo: '/images/logo.jpg', logoNav: '/images/logo-nav.png' }

export const MISSION = {
  statement: 'To create impactful experiences that inspire, engage, and deliver measurable results for our clients through creativity, precision, and passion.',
  items: [
    ['Understand', 'We understand our clients’ goals and audience to build meaningful experiences.'],
    ['Create', 'We turn ideas into creative concepts that captivate and connect.'],
    ['Execute', 'We execute flawlessly with precision, coordination, and attention to every detail.'],
    ['Build', 'We build long-term partnerships based on trust, reliability, and excellence.'],
    ['Deliver', 'We deliver results that exceed expectations and create lasting impressions.'],
  ],
}

export const VISION = {
  short: 'To become the most trusted and innovative event partner in Pakistan by 2030.',
  long: 'To be a nationally leading corporate event management company, recognized for innovation, excellence and impactful experiences.',
  image: '/images/vision.jpg',
  years: [
    ['2022', 'Building Foundations'], ['2023', 'Strengthening Our Presence'], ['2024', 'Expanding Partnerships'],
    ['2025', 'Diversifying Event Solutions'], ['2026', 'Enhancing Operational Excellence'],
    ['2027', 'Becoming a Preferred Corporate Partner Across Major Cities'], ['2028', 'Expanding National Reach'],
    ['2029', 'Setting New Standards in Corporate Events'], ['2030', 'A Nationally Recognized Brand'],
  ],
}

export const SERVICES = {
  list: ['Corporate Events & Conferences', 'Product Launches & Brand Activations', 'Private Parties & Social Gatherings', 'Exhibition & Booth Design', 'Expo Events'],
  image: '/images/services.jpg',
  solutions: ['Conferences', 'Exhibitions & Expo', 'Seminars & Workshops', 'Product Launches', 'Award Ceremonies', 'Corporate Dinners', 'Brand Activations', 'Customized Business Events'],
}

export const WHY = {
  image: '/images/trophy.jpg',
  items: [
    ['End-to-End Event Management', 'From concept development to flawless execution.'],
    ['Creative In-House Design Team', 'Custom stages, branding, media walls & event concepts.'],
    ['Corporate Event Specialists', 'Conferences, product launches, award ceremonies & gala dinners.'],
    ['Dedicated Project Management', 'Single point of contact for seamless coordination.'],
    ['Nationwide Execution Capability', 'Delivering events across Pakistan with consistent quality.'],
    ['Professional Production Solutions', 'Stage, SMD, lighting, sound, branding & event logistics under one roof.'],
  ],
  stats: [[180, '+', 'Successful Events'], [50, '+', 'Corporate Clients'], [2022, '', 'Founded In']],
}

const c = (file, name) => ({ name, src: `/images/clients/${file}.jpg` })
export const CLIENTS = [
  c('punjab-wildlife', 'Punjab Wildlife and Parks Department'), c('govt-punjab', 'Government of the Punjab'), c('adb', 'Asian Development Bank'),
  c('pearl-continental', 'Pearl-Continental Hotels & Resorts'), c('qatar-airways', 'Qatar Airways'), c('forestry-wildlife', 'Forestry & Wildlife Punjab Pakistan'),
  c('iucn', 'IUCN'), c('road-story', 'Road & Story'), c('horizon', 'Horizon'), c('agtl', 'AGTL'), c('us-embassy', 'United States of America Embassy'), c('piaerc', 'PIAERC'),
  c('undp', 'UNDP'), c('jd-sports', 'JD Sports PK'), c('broiler-farmers', 'Broiler Farmer Association Punjab'), c('edpro', 'EdPro'), c('golootlo', 'Golootlo'),
  c('gspak', 'GsPak'), c('fao', 'FAO'), c('siemens', 'Siemens'), c('route2health', 'Route2Health'), c('aster', 'Aster Life Sciences'),
  c('al-ehsan', 'Al-Ehsan Welfare Eye Hospital'), c('turkiye-embassy', 'Republic of Türkiye Embassy'), c('multan-sultans', 'Multan Sultans'),
  c('riphah', 'Riphah International University'), c('microtech', 'Microtech Inc.'), c('activekey', 'ActiveKey Solutions'),
]

const p = (file, client, logo, title) => ({ client, title, logo: `/images/clients/${logo}.jpg`, src: `/images/portfolio/${file}.jpg` })
export const PORTFOLIO = [
  p('pearl-continental', 'Pearl-Continental & Road & Story', 'pearl-continental', 'Launch Ceremony'),
  p('iucn', 'IUCN', 'iucn', 'Punjab Agri-Food Investment Forum 2026'),
  p('punjab-wildlife', 'Punjab Wildlife and Parks Department', 'punjab-wildlife', 'Preserving the Balance of Nature'),
  p('fao', 'FAO', 'fao', 'Inception Workshop · GEF Project'),
  p('forestry-wildlife', 'Forestry & Wildlife Punjab', 'forestry-wildlife', 'Forest Operational Conference, 2025'),
  p('route2health', 'Route2Health', 'route2health', 'Family Night · Celebrating Success Together'),
  p('edpro', 'EdPro', 'edpro', 'Education Professional Consultants'),
  p('activekey', 'ActiveKey Solutions', 'activekey', 'Annual Gala Dinner · March 2024'),
  p('golootlo', 'Golootlo', 'golootlo', 'Merchant 2026 with NBP'),
  p('aster', 'Aster Life Sciences', 'aster', 'Partexx Launch Symposium'),
  p('piaerc', 'PIAERC', 'piaerc', 'Pakistan 1st International Animal & Environmental Rights Conference 2025'),
]

export const TEAM = [
  ['Faizan Khan', 'Founder', 'faizan'], ['Bushra Mehboob', 'Head of sales', 'bushra'], ['Usman', '3D Designer', 'usman'],
  ['Ibrahim Butt', 'Execution Manager', 'ibrahim'], ['Moiz Mughal', 'Content Creater', 'moiz'], ['Youhaniz', 'Graphic Designer', 'youhaniz'],
]

export const CONTACT = [
  ['Mobile Number', '+92-3072108308', 'tel:+923072108308'],
  ['Website', 'www.businessbridgecorporate.com', 'https://www.businessbridgecorporate.com'],
  ['Email', 'businessbridgecorporate@gmail.com', 'mailto:businessbridgecorporate@gmail.com'],
  ['Instagram', '@businessbridge.corporate', 'https://instagram.com/businessbridge.corporate'],
]
