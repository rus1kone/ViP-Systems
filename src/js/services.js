const servicesToggle = document.querySelector('#servicesToggle')
const servicesToggleText = document.querySelector('#servicesToggleText')

const extraServiceCards = document.querySelectorAll('.service-card-extra')


const setServicesExpanded = expanded => {

  extraServiceCards.forEach(card => {
    card.hidden = !expanded
  })


  servicesToggle?.classList.toggle(
    'is-expanded',
    expanded
  )


  servicesToggle?.setAttribute(
    'aria-expanded',
    String(expanded)
  )


  if (servicesToggleText) {
    servicesToggleText.textContent =
      expanded ? 'Show Less' : 'View More'
  }

}


servicesToggle?.addEventListener('click', () => {

  const expanded =
    servicesToggle.getAttribute('aria-expanded') === 'true'

  setServicesExpanded(!expanded)

})