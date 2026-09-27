const hero = document.querySelector('.hero')
const heroSlide = document.querySelector('#heroSlide')

const slideLetter = document.querySelector('#heroSlideLetter')
const slideHeading = document.querySelector('#heroSlideHeading')
const slideSubtitle = document.querySelector('#heroSlideSubtitle')

const sliderDots = document.querySelectorAll('.hero-slider-dot')


const slides = [
  {
    letter: 'V',
    heading: 'VISION.',
    subtitle: 'Technology planned around how you operate.',
  },
  {
    letter: 'I',
    heading: 'INTEGRATION.',
    subtitle: 'Complex systems. One accountable partner.',
  },
  {
    letter: 'P',
    heading: 'PARTNERSHIP.',
    subtitle: 'Personal accountability beyond project delivery.',
  },
]


let currentSlide = 0
let isAnimating = false

let touchStartX = null

let autoplayTimer = null


const ANIMATION_DURATION = 320
const AUTOPLAY_DELAY = 6000
const SWIPE_THRESHOLD = 50


// ========================================
// Render
// ========================================

const renderSlide = index => {
  const slide = slides[index]

  if (
    !slide ||
    !slideLetter ||
    !slideHeading ||
    !slideSubtitle
  ) {
    return
  }

  slideLetter.textContent = slide.letter

  slideHeading.textContent = slide.heading.slice(1)

  slideSubtitle.textContent = slide.subtitle


  sliderDots.forEach((dot, dotIndex) => {
    dot.classList.toggle(
      'is-active',
      dotIndex === index
    )
  })
}


// ========================================
// Change slide
// ========================================

const goToSlide = index => {
  if (
    isAnimating ||
    index === currentSlide
  ) {
    return
  }


  isAnimating = true

  heroSlide?.classList.add('is-animating')


  window.setTimeout(() => {

    currentSlide = index

    renderSlide(currentSlide)

    heroSlide?.classList.remove('is-animating')

    isAnimating = false

  }, ANIMATION_DURATION)
}


// ========================================
// Navigation
// ========================================

const nextSlide = () => {
  const nextIndex =
    (currentSlide + 1) % slides.length

  goToSlide(nextIndex)
}


const previousSlide = () => {
  const previousIndex =
    (currentSlide - 1 + slides.length) %
    slides.length

  goToSlide(previousIndex)
}


// ========================================
// Slider dots
// ========================================

sliderDots.forEach(dot => {

  dot.addEventListener('click', () => {

    const index = Number(dot.dataset.slide)

    if (Number.isNaN(index)) return

    goToSlide(index)

    restartAutoplay()

  })

})


// ========================================
// Touch / swipe
// ========================================

hero?.addEventListener(
  'touchstart',
  event => {

    touchStartX =
      event.touches[0]?.clientX ?? null

  },
  {
    passive: true,
  }
)


hero?.addEventListener(
  'touchend',
  event => {

    if (touchStartX === null) return


    const touchEndX =
      event.changedTouches[0]?.clientX

    if (touchEndX === undefined) return


    const difference =
      touchStartX - touchEndX


    if (
      Math.abs(difference) >
      SWIPE_THRESHOLD
    ) {

      if (difference > 0) {
        nextSlide()
      } else {
        previousSlide()
      }

      restartAutoplay()
    }


    touchStartX = null

  },
  {
    passive: true,
  }
)


// ========================================
// Autoplay
// ========================================

const startAutoplay = () => {

  autoplayTimer =
    window.setInterval(
      nextSlide,
      AUTOPLAY_DELAY
    )

}


const stopAutoplay = () => {

  if (autoplayTimer === null) return

  window.clearInterval(autoplayTimer)

  autoplayTimer = null

}


const restartAutoplay = () => {

  stopAutoplay()
  startAutoplay()

}


// ========================================
// Init
// ========================================

renderSlide(currentSlide)

startAutoplay()