import { setAttributes, renderChildren } from '..'

export const renderText = (parentNode, props) => {
  const element = document.createElement('p')
  const contentNode = document.createTextNode(props.value)
  element.append(contentNode)

  setAttributes(element, props)
  renderChildren(element, props)

  parentNode.appendChild(element)
}
