import { setAttributes } from '..'

export const renderFeedback = (parentNode, props) => {
  const element = document.createElement('div')
  const span = document.createElement('span')
  span.setAttribute('class', props.class)
  element.appendChild(span)
  element.innerHTML = props.title

  setAttributes(element, props)

  parentNode.appendChild(element)
}
