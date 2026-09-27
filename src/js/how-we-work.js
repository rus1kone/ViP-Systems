const processSection = document.querySelector('.how-we-work')


if (processSection) {

  const desktopGrid =
    processSection.querySelector('.drive-desktop-grid')

  const desktopSteps = [
    ...processSection.querySelectorAll(
      '.drive-desktop .drive-step'
    ),
  ]

  const desktopDots = [
    ...processSection.querySelectorAll(
      '.drive-desktop-dots .drive-dot'
    ),
  ]


  const mobileSlider =
    processSection.querySelector('.drive-mobile-slider')

  const mobileTrack =
    processSection.querySelector('.drive-mobile-track')

  const mobileDots = [
    ...processSection.querySelectorAll(
      '.drive-mobile-dots .drive-dot'
    ),
  ]

  const prevButton =
    processSection.querySelector('.drive-arrow-prev')

  const nextButton =
    processSection.querySelector('.drive-arrow-next')


  const STEP_COUNT = 5

  const ANIMATION_DURATION = 550
  const AUTOPLAY_DELAY = 2200


  let currentStep = 0

  let stepOffset = STEP_COUNT

  let itemWidth = 0

  let isAnimating = false
  let isPaused = false

  let autoplayTimer = null


  /* =========================
     Build infinite mobile track
  ========================= */

  const originalMobileSteps = mobileTrack
    ? [...mobileTrack.children]
    : []


  if (mobileTrack && originalMobileSteps.length) {

    const before = originalMobileSteps.map(step => {
      const clone = step.cloneNode(true)

      clone.setAttribute('aria-hidden', 'true')

      return clone
    })


    const after = originalMobileSteps.map(step => {
      const clone = step.cloneNode(true)

      clone.setAttribute('aria-hidden', 'true')

      return clone
    })


    mobileTrack.prepend(...before)

    mobileTrack.append(...after)

  }


  /* =========================
     Helpers
  ========================= */

  const getMobileSteps = () => {

    if (!mobileTrack) return []

    return [...mobileTrack.children]

  }


  const updateActiveState = () => {

    desktopSteps.forEach((step, index) => {

      step.classList.toggle(
        'is-active',
        index === currentStep
      )

    })


    desktopDots.forEach((dot, index) => {

      dot.classList.toggle(
        'is-active',
        index === currentStep
      )

    })


    getMobileSteps().forEach(step => {

      const index =
        Number(step.dataset.stepIndex)

      step.classList.toggle(
        'is-active',
        index === currentStep
      )

    })


    mobileDots.forEach((dot, index) => {

      dot.classList.toggle(
        'is-active',
        index === currentStep
      )

    })

  }


  const updateMobilePosition = (
    animate = false
  ) => {

    if (!mobileTrack) return


    mobileTrack.style.transition = animate
      ? `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
      : 'none'


    mobileTrack.style.transform =
      `translateX(-${stepOffset * itemWidth}px)`

  }


  /* =========================
     Mobile sizing
  ========================= */

  const updateMobileSize = () => {

    if (!mobileSlider) return


    itemWidth = mobileSlider.clientWidth


    getMobileSteps().forEach(step => {

      step.style.width = `${itemWidth}px`

    })


    updateMobilePosition(false)

  }


  /* =========================
     Change slide
  ========================= */

  const slideTo = direction => {

    if (isAnimating) return


    isAnimating = true

    stepOffset += direction


    updateMobilePosition(true)


    window.setTimeout(() => {

      currentStep =
        (
          currentStep +
          direction +
          STEP_COUNT
        ) % STEP_COUNT


      if (stepOffset >= STEP_COUNT * 2) {
        stepOffset -= STEP_COUNT
      }


      if (stepOffset < 0) {
        stepOffset += STEP_COUNT
      }


      updateMobilePosition(false)

      updateActiveState()


      isAnimating = false

    }, ANIMATION_DURATION)

  }


  const next = () => {
    slideTo(1)
  }


  const previous = () => {
    slideTo(-1)
  }


  /* =========================
     Autoplay
  ========================= */

  const autoplayTick = () => {

    if (!isPaused) {
      next()
    }


    autoplayTimer =
      window.setTimeout(
        autoplayTick,
        AUTOPLAY_DELAY
      )

  }


  const startAutoplay = () => {

    if (autoplayTimer) {
      window.clearTimeout(autoplayTimer)
    }


    autoplayTimer =
      window.setTimeout(
        autoplayTick,
        AUTOPLAY_DELAY
      )

  }


  /* =========================
     Desktop interaction
  ========================= */

  desktopGrid?.addEventListener(
    'mouseenter',
    () => {
      isPaused = true
    }
  )


  desktopGrid?.addEventListener(
    'mouseleave',
    () => {
      isPaused = false
    }
  )


  desktopSteps.forEach((step, index) => {

    step.addEventListener(
      'mouseenter',
      () => {

        currentStep = index

        updateActiveState()

      }
    )

  })


  /* =========================
     Mobile interaction
  ========================= */

  mobileSlider?.addEventListener(
    'mouseenter',
    () => {
      isPaused = true
    }
  )


  mobileSlider?.addEventListener(
    'mouseleave',
    () => {
      isPaused = false
    }
  )


  prevButton?.addEventListener(
    'click',
    previous
  )


  nextButton?.addEventListener(
    'click',
    next
  )


  /* =========================
     Resize
  ========================= */

  const resizeObserver =
    new ResizeObserver(
      updateMobileSize
    )


  if (mobileSlider) {
    resizeObserver.observe(mobileSlider)
  }


  /* =========================
     Init
  ========================= */

  updateMobileSize()

  updateActiveState()

  startAutoplay()

}