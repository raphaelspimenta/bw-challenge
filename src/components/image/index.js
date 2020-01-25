import { setAttributes } from '..'

export const renderImage = (parentNode, props) => {
  const element = document.createElement('img')
  setAttributes(element, props)

  Object.keys(props).map(key => {
    if (key === 'url') { element.setAttribute('src', props[key]) } else { element.setAttribute([key], props[key]) }
  })

  parentNode.appendChild(element)
}
