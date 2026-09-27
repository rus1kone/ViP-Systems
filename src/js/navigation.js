const header = document.querySelector('#siteHeader')

const megaTriggers = document.querySelectorAll('[data-mega-trigger]')
const megaMenus = document.querySelectorAll('[data-mega-menu]')

const desktopNavigationLinks = document.querySelectorAll(
  '.desktop-nav a, .mega-menu-link'
)

const burgerButton = document.querySelector('#burgerButton')
const mobileDrawer = document.querySelector('#mobileDrawer')
const mobileOverlay = document.querySelector('#mobileOverlay')

const mobileToggles = document.querySelectorAll('.mobile-nav-toggle')
const mobileLinks = document.querySelectorAll('.mobile-drawer a')

const SCROLL_THRESHOLD = 40


// ========================================
// Header scroll state
// ========================================

const handleHeaderScroll = () => {
  if (!header) return

  header.classList.toggle(
    'is-scrolled',
    window.scrollY > SCROLL_THRESHOLD
  )
}


window.addEventListener(
  'scroll',
  handleHeaderScroll,
  {
    passive: true,
  }
)

handleHeaderScroll()


// ========================================
// Desktop mega menu
// ========================================

const closeMegaMenus = () => {
  megaMenus.forEach(menu => {
    menu.classList.remove('is-active')
    menu.setAttribute('aria-hidden', 'true')
  })

  megaTriggers.forEach(trigger => {
    trigger.classList.remove('is-active')
  })
}


const openMegaMenu = name => {
  closeMegaMenus()

  const trigger = document.querySelector(
    `[data-mega-trigger="${name}"]`
  )

  const menu = document.querySelector(
    `[data-mega-menu="${name}"]`
  )

  if (!trigger || !menu) return

  trigger.classList.add('is-active')

  menu.classList.add('is-active')
  menu.setAttribute('aria-hidden', 'false')
}


// Open mega menu on hover
megaTriggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', () => {
    const menuName = trigger.dataset.megaTrigger

    if (!menuName) return

    openMegaMenu(menuName)
  })
})


// Close mega menu when cursor leaves header
header?.addEventListener('mouseleave', () => {
  closeMegaMenus()
})


// Close mega menu when hovering regular nav items
// Example: Projects
document
  .querySelectorAll('.nav-item:not([data-mega-trigger])')
  .forEach(item => {
    item.addEventListener(
      'mouseenter',
      closeMegaMenus
    )
  })


// Close mega menu after clicking any desktop navigation link
// Includes mega-menu links and Services / Industries / Company
desktopNavigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMegaMenus()
  })
})


// ========================================
// Mobile drawer
// ========================================

const openMobileMenu = () => {
  burgerButton?.classList.add('is-active')
  mobileDrawer?.classList.add('is-active')
  mobileOverlay?.classList.add('is-active')

  header?.classList.add('is-menu-open')

  document.body.classList.add('menu-open')

  burgerButton?.setAttribute(
    'aria-expanded',
    'true'
  )

  burgerButton?.setAttribute(
    'aria-label',
    'Close menu'
  )

  mobileDrawer?.setAttribute(
    'aria-hidden',
    'false'
  )
}


const closeMobileMenu = () => {
  burgerButton?.classList.remove('is-active')
  mobileDrawer?.classList.remove('is-active')
  mobileOverlay?.classList.remove('is-active')

  header?.classList.remove('is-menu-open')

  document.body.classList.remove('menu-open')

  burgerButton?.setAttribute(
    'aria-expanded',
    'false'
  )

  burgerButton?.setAttribute(
    'aria-label',
    'Open menu'
  )

  mobileDrawer?.setAttribute(
    'aria-hidden',
    'true'
  )

  closeMobileAccordions()
}


const toggleMobileMenu = () => {
  const isOpen =
    mobileDrawer?.classList.contains('is-active')

  if (isOpen) {
    closeMobileMenu()
  } else {
    openMobileMenu()
  }
}


burgerButton?.addEventListener(
  'click',
  toggleMobileMenu
)

mobileOverlay?.addEventListener(
  'click',
  closeMobileMenu
)


// ========================================
// Mobile accordion
// ========================================

const closeMobileAccordions = () => {
  mobileToggles.forEach(toggle => {
    toggle.classList.remove('is-active')

    toggle.setAttribute(
      'aria-expanded',
      'false'
    )

    const submenu =
      toggle.nextElementSibling

    submenu?.classList.remove('is-active')
  })
}


mobileToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const submenu =
      toggle.nextElementSibling

    if (!submenu) return

    const isOpen =
      toggle.classList.contains('is-active')

    closeMobileAccordions()

    if (!isOpen) {
      toggle.classList.add('is-active')

      toggle.setAttribute(
        'aria-expanded',
        'true'
      )

      submenu.classList.add('is-active')
    }
  })
})


// ========================================
// Close mobile menu after navigation
// ========================================

mobileLinks.forEach(link => {
  link.addEventListener(
    'click',
    closeMobileMenu
  )
})


// ========================================
// Escape key
// ========================================

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return

  closeMegaMenus()
  closeMobileMenu()
})


// ========================================
// Desktop/mobile resize protection
// ========================================

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMobileMenu()
  }
})