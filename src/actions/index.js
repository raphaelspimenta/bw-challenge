import { renderFeedback } from '../components/feedback'

export const validateMjority = (age) => {
  const ageNumber = parseInt(age)

  if (ageNumber >= 18) {
    renderFeedback(document.body, {
      title: 'Sim! Você pode ser preso kk',
      class: 'success'
    })
  } else {
    renderFeedback(document.body, {
      title: 'Você pode até não ser preso, mas isso não significa que é inocente ˆˆ',
      class: 'error'
    })
  }
}

export const mapActions = {
  VALIDATE_MAJORITY: validateMjority
}
