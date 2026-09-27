import oneVanderbiltImage from '../assets/images/projects/one-vanderbilt.png'
import sofiStadiumImage from '../assets/images/projects/sofi-stadium.png'
import waldorfAstoriaImage from '../assets/images/projects/waldorf-astoria.png'
import hudsonYardsImage from '../assets/images/projects/hudson-yards.png'
import mgmNationalImage from '../assets/images/projects/mgm-national.png'
import parkPlaceImage from '../assets/images/projects/park-place.png'
import bouldinImage from '../assets/images/projects/bouldin.jpg'
import metronationalImage from '../assets/images/projects/metronational.jpg'
import merrickImage from '../assets/images/projects/merrick.png'


const PROJECTS = {

  'one-vanderbilt': {
    title: 'One Vanderbilt',
    location: 'Midtown Manhattan, New York',

    image: oneVanderbiltImage,
    position: 'center 68%',

    scope: [
      'Structured Cabling',
      'DAS Systems',
      'CCTV & Access Control',
    ],

    description:
      'One Vanderbilt stands at 1,401 feet as the tallest office tower in Midtown Manhattan. VIP Systems delivered a complete low-voltage infrastructure across all 58 floors, including a high-density structured cabling backbone, distributed antenna systems for seamless in-building cellular coverage, and an enterprise CCTV and access control platform. The project required precision coordination across multiple trades during active high-rise construction, with zero tolerance for schedule delays. Every system was engineered and documented to SL Power standards, ensuring long-term scalability for the building\'s Class A tenants.',
  },


  'sofi-stadium': {
    title: 'SoFi Stadium',
    location: 'Los Angeles, California',

    image: sofiStadiumImage,
    position: 'center 48%',

    scope: [
      'Stadium DAS',
      'AV Integration',
      'Digital Signage',
      'Security',
    ],

    description:
      'SoFi Stadium is the most technologically advanced sports venue in North America, home to the Los Angeles Rams and Chargers. VIP Systems engineered and installed the full stadium DAS infrastructure to support 70,000 simultaneous users across all carriers, along with the digital signage backbone powering the world\'s largest videoboard. Our team coordinated AV systems throughout premium suites, club levels, and concourse areas, and deployed an enterprise-grade surveillance network covering every zone of the 298-acre Hollywood Park campus. Scoreboard and ribbon board digital signage, arena-wide IP camera arrays, and fiber backbone were delivered on a compressed NFL construction schedule with zero tolerance for delay.',
  },


  'waldorf-astoria': {
    title: 'Waldorf Astoria',
    location: 'New Orleans, Louisiana',

    image: waldorfAstoriaImage,
    position: 'center 32%',

    scope: [
      'Guest Room AV',
      'Concierge Automation',
      'Surveillance',
    ],

    description:
      'The Waldorf Astoria New Orleans is one of the most storied luxury hotel brands in the world, and its technology infrastructure demanded the same standard of excellence as its reputation. VIP Systems delivered a complete guest room automation platform, integrating lighting, climate, and AV controls into a seamless concierge experience. We upgraded the property-wide surveillance system with IP camera arrays and unified video management, installed hotel-grade DAS for consistent cellular coverage across all floors and ballrooms, and integrated the building management system with front-of-house concierge software. Every installation was performed with minimal disruption to active hotel operations.',
  },


  'hudson-yards': {
    title: 'Hudson Yards',
    location: 'West Side, New York',

    image: hudsonYardsImage,
    position: 'center center',

    scope: [
      'Fiber Infrastructure',
      'Access Control',
      'Structured Cabling',
    ],

    description:
      'Hudson Yards is Manhattan\'s largest private real estate development in history, spanning 28 acres on the West Side with over 18 million square feet of residential, commercial, and cultural space. VIP Systems served as the low-voltage integrator of record across multiple buildings in the phased development, delivering fiber optic backbone infrastructure, enterprise access control and intercom platforms, and complete structured cabling for office towers and residential high-rises. Coordination across a dense multi-trade construction environment required meticulous scheduling and real-time documentation. The Vessel public installation and related cultural spaces also received custom AV and surveillance packages under our scope.',
  },


  'mgm-national': {
    title: 'MGM National Harbor',
    location: 'Oxon Hill, Maryland',

    image: mgmNationalImage,
    position: 'center center',

    scope: [
      'Casino Surveillance',
      'Digital Signage',
      'DAS',
      'Cabling',
    ],

    description:
      'MGM National Harbor is a premier destination resort and casino on the banks of the Potomac River, totaling 3.2 million square feet across hotel towers, gaming floors, entertainment venues, and retail. VIP Systems delivered one of the largest casino surveillance deployments on the East Coast, integrating thousands of IP cameras with a centralized video management platform purpose-built for gaming compliance. We also installed digital signage networks throughout gaming and hospitality areas, deployed full-property DAS infrastructure across both towers, and completed all structured cabling and head-end infrastructure. The project was executed in close coordination with MGM security operations and gaming regulatory requirements.',
  },


  'park-place': {
    title: 'Park Place Tower',
    location: 'Chicago, Illinois',

    image: parkPlaceImage,
    position: 'center 38%',

    scope: [
      'Home Automation',
      'Access Control',
      'Fiber Distribution',
    ],

    description:
      'Park Place Tower is a 72-story luxury residential high-rise in the heart of Chicago, designed to deliver a fully connected smart living experience from lobby to penthouse. VIP Systems engineered and installed the building-wide fiber distribution network, providing gigabit connectivity to every unit and amenity floor. We deployed a centralized resident access control and video intercom platform, integrated smart home automation packages for premium units, and installed a complete IP surveillance system covering all common areas, parking structures, and building perimeter. The project was delivered on schedule for the building\'s inaugural residents and received recognition from the general contractor for documentation quality and trade coordination.',
  },


  bouldin: {
    title: 'The Bouldin at 1301 South Lamar',
    location: 'Austin, Texas',

    image: bouldinImage,
    position: 'center 40%',

    scope: [
      'Structured Cabling',
      'AV Integration',
      'Access Control',
    ],

    description:
      'The Bouldin at 1301 South Lamar is a 471,000 SF mixed-use development in Austin\'s South Lamar corridor, anchored by a 57,700 SF Life Time athletic country club across the lower two floors. VIP Systems delivered a complete low-voltage infrastructure package spanning the full building program, structured cabling, AV integration, and access control systems coordinated across office, retail, and wellness environments. The club\'s training floor features floor-to-ceiling glass and open-plan fitness programming, while the upper level houses a co-ed bathhouse with hot tubs, cold plunges, saunas, and steam rooms overlooking West Bouldin Creek. All systems were delivered on schedule for Seamless Capital, with full documentation to STG Design and RIOS standards.',
  },


  metronational: {
    title: 'MetroNational',
    location: 'Houston, Texas',

    image: metronationalImage,
    position: 'center 30%',

    scope: [
      'Video Management Systems',
      'Multi-Site Integration',
      'Security Consultation',
    ],

    description:
      'In 2024, VIP Systems was selected to upgrade and integrate video management systems across seven commercial properties and associated parking garages for MetroNational in Houston. The engagement included extensive design consultation with building engineers, property management teams, and in-house security staff to deliver a unified surveillance platform across the full portfolio. The flagship property at 929 Gessner Road is a thirty-three-story Class A office tower in Memorial City, home to Memorial Hermann Hospital and connected by skywalk to The Westin Memorial and Memorial City Mall. VIP Systems is proud to partner with MetroNational in their commitment to building better lives across the greater Houston community.',
  },


  merrick: {
    title: 'Merrick on Midway',
    location: 'Farmers Branch, Texas',

    image: merrickImage,
    position: 'center 42%',

    scope: [
      'Structured Cabling',
      'Access Control',
      'AV Integration',
    ],

    description:
      'Merrick on Midway is a 365-unit multifamily community in Farmers Branch, Texas, developed by Fairfield to serve the rapidly growing Dallas-Fort Worth corridor. VIP Systems delivered a complete low-voltage infrastructure package across the property, encompassing structured cabling, access control, and AV integration for all amenity and common areas. The community features a resort-style pool with sundeck, a fitness center with two dedicated studio spaces, and a rooftop sky deck with panoramic views stretching from downtown Dallas to AT&T Stadium. Located minutes from the Galleria Dallas and major regional employers, Merrick on Midway represents a flagship example of technology-forward multifamily development in the DFW market.',
  },

}


/* =========================
   DOM
========================= */

const projectTiles =
  document.querySelectorAll('.project-tile')

const lightbox =
  document.querySelector('#projectLightbox')

const lightboxPanel =
  lightbox?.querySelector('.project-lightbox-panel')

const lightboxImage =
  document.querySelector('#projectLightboxImage')

const lightboxTitle =
  document.querySelector('#projectLightboxTitle')

const lightboxLocation =
  document.querySelector('#projectLightboxLocation')

const lightboxScope =
  document.querySelector('#projectLightboxScope')

const lightboxDescription =
  document.querySelector('#projectLightboxDescription')

const lightboxClose =
  document.querySelector('#projectLightboxClose')


let lastFocusedElement = null


/* =========================
   Open
========================= */

const openProject = projectId => {

  const project =
    PROJECTS[projectId]


  if (!project || !lightbox) return


  lastFocusedElement =
    document.activeElement


  if (lightboxImage) {

    lightboxImage.style.setProperty(
      '--project-lightbox-image',
      `url("${project.image}")`
    )


    lightboxImage.style.setProperty(
      '--project-lightbox-position',
      project.position
    )

  }


  if (lightboxTitle) {
    lightboxTitle.textContent =
      project.title
  }


  if (lightboxLocation) {
    lightboxLocation.textContent =
      project.location
  }


  if (lightboxDescription) {
    lightboxDescription.textContent =
      project.description
  }


  if (lightboxScope) {

    lightboxScope.innerHTML = ''


    project.scope.forEach(scope => {

      const item =
        document.createElement('li')


      item.className =
        'project-lightbox-scope-item'


      item.textContent =
        scope


      lightboxScope.appendChild(item)

    })

  }


  lightbox.classList.add('is-active')

  lightbox.setAttribute(
    'aria-hidden',
    'false'
  )


  document.body.classList.add(
    'project-lightbox-open'
  )


  window.requestAnimationFrame(() => {
    lightboxClose?.focus()
  })

}


/* =========================
   Close
========================= */

const closeProject = () => {

  if (!lightbox) return


  lightbox.classList.remove(
    'is-active'
  )


  lightbox.setAttribute(
    'aria-hidden',
    'true'
  )


  document.body.classList.remove(
    'project-lightbox-open'
  )


  if (
    lastFocusedElement instanceof HTMLElement
  ) {
    lastFocusedElement.focus()
  }

}


/* =========================
   Cards
========================= */

projectTiles.forEach(tile => {

  tile.addEventListener('click', () => {

    openProject(
      tile.dataset.project
    )

  })

})


/* =========================
   Close
========================= */

lightboxClose?.addEventListener(
  'click',
  closeProject
)


lightbox?.addEventListener(
  'click',
  event => {

    if (event.target === lightbox) {
      closeProject()
    }

  }
)


lightboxPanel?.addEventListener(
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
      lightbox?.classList.contains('is-active')
    ) {
      closeProject()
    }

  }
)