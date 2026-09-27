const newsletterForm = document.querySelector('#newsletterForm')
const newsletterSuccess = document.querySelector('#newsletterSuccess')
const currentYear = document.querySelector('#currentYear')


// ========================================
// Current year
// ========================================

if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}


// ========================================
// Newsletter
// ========================================

newsletterForm?.addEventListener('submit', event => {
  event.preventDefault()

  if (!newsletterForm.checkValidity()) {
    newsletterForm.reportValidity()
    return
  }

  newsletterForm.hidden = true

  if (newsletterSuccess) {
    newsletterSuccess.hidden = false
  }
})