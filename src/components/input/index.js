import { setState, getState } from '../../state'
import { setAttributes, renderChildren } from '..'

export const renderInput = (parentNode, props) => {
  const element = document.createElement('input')
  setAttributes(element, props)

  const onChange = ({ target: { value } }) => {
    setState(props.id, value)
    element.setAttribute('value', value)
  }

  element.setAttribute('value', getState(props.id) || '')
  element.addEventListener('keypress', event => onChange(event))
  element.addEventListener('keyup', event => onChange(event))
  element.addEventListener('change', event => onChange(event))

  renderChildren(element, props)

  parentNode.appendChild(element)
}
