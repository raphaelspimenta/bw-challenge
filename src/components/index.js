import { renderInput } from './input'
import { renderText } from './text'
import { renderButton } from './button'
import { renderImage } from './image'
import { checkArray } from '../core/utils'

const WARNING_INFO = 'Render warning: Element not found in map: '

export const setAttributes = (element, props) => {
  Object.keys(props).map(key => {
    if (key !== 'action' && key !== 'children' && key !== 'tag') { element.setAttribute([key], props[key]) }
  })
}

export const renderData = (tag, parendNode, data) => ({
  text: () => renderText(parendNode, data),
  input: () => renderInput(parendNode, data),
  image: () => renderImage(parendNode, data),
  button: () => renderButton(parendNode, data)
})[tag]

export const renderChildren = (element, props) => {
  if (checkArray(props.children)) {
    props.children.map(child => {
      const render = renderData(child.tag, element, child)
      render ? render() : console.warn(WARNING_INFO + child.tag)
    })
  }
}
