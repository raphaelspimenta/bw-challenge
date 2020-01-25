import { renderContainer } from './components/container'
import './core/assets/style/index.scss'
import dataset from './core/assets/data/base.json'

document.addEventListener('DOMContentLoaded', function (event) {
  renderContainer(document.body, dataset)
})
