import { mapActions } from '../../actions'
import { checkArray } from '../../core/utils'
import { getState } from '../../state'
import { setAttributes, renderChildren } from '..'

export const renderButton = (parentNode, props) => {
  const element = document.createElement('button')

  element.innerText = props.value
  setAttributes(element, props)

  const onClick = () => {
    const params = checkArray(props.action.params) && props.action.params.map(param => getState(param))
    mapActions[props.action.id](...params)
  }
  element.addEventListener('click', onClick)

  renderChildren(element, props)

  parentNode.appendChild(element)
}
