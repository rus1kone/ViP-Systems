
import sportsImage from '../assets/images/markets/sports.png'
import governmentImage from '../assets/images/markets/government.png'
import multifamilyImage from '../assets/images/markets/multifamily.png'
import hospitalityImage from '../assets/images/markets/hospitality.png'
import commercialImage from '../assets/images/markets/commercial.png'
import educationImage from '../assets/images/markets/education.png'
import energyImage from '../assets/images/markets/energy.png'
import developersImage from '../assets/images/markets/developers.png'


const MARKETS = {

  sports: {
    title: 'Sports & Public Venues',
    image: sportsImage,

    description:
      'Stadium-scale deployments for arenas, amphitheaters, and convention centers — high-capacity DAS, AV, and enterprise surveillance that performs flawlessly at peak load.',

    solutions: [
      'Stadium DAS & In-Venue Cellular Coverage',
      'Scoreboard & Ribbon Display Systems',
      'Arena-Wide AV Integration',
      'Crowd Surveillance & Video Analytics',
      'Concession POS Networks',
    ],
  },


  government: {
    title: 'Government & Municipal',
    image: governmentImage,

    description:
      'Mission-critical infrastructure for federal, state, and local facilities — engineered to meet the most stringent compliance and security standards.',

    solutions: [
      'Public Safety Radio & BDA Systems',
      'Secure Access Control & Surveillance',
      'Emergency Notification Systems',
      'Structured Cabling for Government Campuses',
      'NFPA-Compliant Life Safety Integration',
    ],
  },


  multifamily: {
    title: 'Multifamily & Mixed Use',
    image: multifamilyImage,

    description:
      'Elevating multifamily living with smart unit packages, robust connectivity, and community-wide amenity technology from foundation to penthouse.',

    solutions: [
      'Unit-Level Smart Automation',
      'Building-Wide Access Control',
      'Fiber & High-Speed Network Distribution',
      'Lobby AV & Concierge Technology',
      'EV Charging Station Networks',
    ],
  },


  hospitality: {
    title: 'Hospitality & Gaming',
    image: hospitalityImage,

    description:
      'The hospitality experience is defined by seamless technology. From intelligent in-room automation to casino surveillance, we deliver invisible excellence.',

    solutions: [
      'Guest Room Automation & AV',
      'Casino-Grade Surveillance Systems',
      'Hotel-Wide DAS Coverage',
      'Digital Signage & Wayfinding',
      'Concierge Software Integration',
    ],
  },


  commercial: {
    title: 'Commercial Real Estate',
    image: commercialImage,

    description:
      'Class A office towers and corporate campuses demand a connected, secure, and flexible technology backbone that scales with tenant requirements.',

    solutions: [
      'Full Structured Cabling Infrastructure',
      'Tenant Access Control Systems',
      'BDA / Public Safety Coverage',
      'Conference Room AV & Unified Comms',
      'Building Automation Integration',
    ],
  },


  education: {
    title: 'Education',
    image: educationImage,

    description:
      'Safe, connected campuses — from K-12 facilities to university complexes — with integrated safety systems and modern AV for every learning environment.',

    solutions: [
      'Campus Access Control & Visitor Management',
      'Emergency Mass Notification Systems',
      'Classroom AV & Digital Signage',
      'Campus-Wide Wi-Fi & Cabling',
      'Surveillance & Threat Detection',
    ],
  },


  energy: {
    title: 'Energy & Industrial',
    image: energyImage,

    description:
      'Rugged, mission-critical security and communications for energy infrastructure, utilities, and industrial facilities operating in harsh environments.',

    solutions: [
      'Perimeter Intrusion Detection',
      'Industrial-Grade Surveillance Systems',
      'Secure Facility Access Control',
      'Public Address & Emergency Comms',
      'Remote Site Monitoring Networks',
    ],
  },


  developers: {
    title: 'Developers & General Contractors',
    image: developersImage,

    description:
      'A single, coordinated low-voltage partner that delivers on schedule, coordinates across all trades, and produces complete documentation for closeout.',

    solutions: [
      'Full Low-Voltage Design Packages',
      'Multi-Trade Schedule Coordination',
      'Riser Diagrams & As-Built Deliverables',
      'Value Engineering & Spec Review',
      'Commissioning & Owner Training',
    ],
  },

}


const marketModal =
  document.querySelector('#marketModal')

const marketModalPanel =
  marketModal?.querySelector('.market-modal-panel')

const marketModalImage =
  document.querySelector('#marketModalImage')

const marketModalTitle =
  document.querySelector('#marketModalTitle')

const marketModalDescription =
  document.querySelector('#marketModalDescription')

const marketModalSolutions =
  document.querySelector('#marketModalSolutions')

const marketModalClose =
  document.querySelector('#marketModalClose')

const marketModalCta =
  document.querySelector('#marketModalCta')

const marketTiles =
  document.querySelectorAll('.market-tile')


let lastFocusedElement = null


/* =========================
   Open
========================= */

const openMarketModal = marketId => {

  const market = MARKETS[marketId]

  if (!market || !marketModal) return


  lastFocusedElement =
    document.activeElement


  if (marketModalImage) {

    marketModalImage.style.setProperty(
      '--market-modal-image',
      `url("${market.image}")`
    )

  }


  if (marketModalTitle) {
    marketModalTitle.textContent =
      market.title
  }


  if (marketModalDescription) {
    marketModalDescription.textContent =
      market.description
  }


  if (marketModalSolutions) {

    marketModalSolutions.innerHTML = ''


    market.solutions.forEach(solution => {

      const item =
        document.createElement('li')


      item.className =
        'market-modal-solution'


      item.textContent =
        solution


      marketModalSolutions.appendChild(item)

    })

  }


  marketModal.classList.add('is-active')

  marketModal.setAttribute(
    'aria-hidden',
    'false'
  )


  document.body.classList.add(
    'market-modal-open'
  )


  window.requestAnimationFrame(() => {
    marketModalClose?.focus()
  })

}


/* =========================
   Close
========================= */

const closeMarketModal = () => {

  if (!marketModal) return


  marketModal.classList.remove('is-active')

  marketModal.setAttribute(
    'aria-hidden',
    'true'
  )


  document.body.classList.remove(
    'market-modal-open'
  )


  if (
    lastFocusedElement instanceof HTMLElement
  ) {
    lastFocusedElement.focus()
  }

}


/* =========================
   Tile click
========================= */

marketTiles.forEach(tile => {

  tile.addEventListener('click', () => {

    openMarketModal(
      tile.dataset.market
    )

  })

})


/* =========================
   Close controls
========================= */

marketModalClose?.addEventListener(
  'click',
  closeMarketModal
)


marketModalCta?.addEventListener(
  'click',
  closeMarketModal
)


marketModal?.addEventListener(
  'click',
  event => {

    if (event.target === marketModal) {
      closeMarketModal()
    }

  }
)


marketModalPanel?.addEventListener(
  'click',
  event => {
    event.stopPropagation()
  }
)


/* =========================
   Escape
========================= */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === 'Escape' &&
      marketModal?.classList.contains(
        'is-active'
      )
    ) {
      closeMarketModal()
    }

  }
)