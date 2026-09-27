const contactForm =
  document.querySelector('#contactForm')

const contactSuccess =
  document.querySelector('#contactSuccess')

const requestTypeSelect =
  document.querySelector('#requestType')

const quickActions =
  document.querySelectorAll(
    '.contact-action[data-request-type]'
  )

const officesToggle =
  document.querySelector('#contactOfficesToggle')

const officesToggleText =
  document.querySelector('#contactOfficesToggleText')

const moreOffices =
  document.querySelector('#contactMoreOffices')


/* =========================
   Quick request buttons
========================= */

quickActions.forEach(button => {

  button.addEventListener('click', () => {

    const requestType =
      button.dataset.requestType


    if (
      !requestType ||
      !requestTypeSelect
    ) {
      return
    }


    requestTypeSelect.value =
      requestType


    requestTypeSelect.dispatchEvent(
      new Event(
        'change',
        {
          bubbles: true,
        }
      )
    )

  })

})


/* =========================
   Form submit
========================= */

contactForm?.addEventListener(
  'submit',
  event => {

    event.preventDefault()


    if (!contactForm.checkValidity()) {

      contactForm.reportValidity()

      return

    }


    contactForm.hidden = true


    if (contactSuccess) {

      contactSuccess.hidden = false

      contactSuccess.focus()

    }

  }
)


/* =========================
   Offices
========================= */

officesToggle?.addEventListener(
  'click',
  () => {

    if (!moreOffices) return


    const willOpen =
      moreOffices.hidden


    moreOffices.hidden =
      !willOpen


    officesToggle.classList.toggle(
      'is-open',
      willOpen
    )


    officesToggle.setAttribute(
      'aria-expanded',
      String(willOpen)
    )


    if (officesToggleText) {

      officesToggleText.textContent =
        willOpen
          ? 'View Less'
          : 'View More'

    }

  }
)