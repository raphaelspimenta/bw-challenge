import { setAttributes, renderChildren } from '..'

export const renderContainer = (parentNode, props) => {
  const element = document.createElement('div')

  setAttributes(element, props)
  renderChildren(element, props)

  parentNode.appendChild(element)
}
