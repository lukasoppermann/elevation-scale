// styling
import selectMenu from 'figma-plugin-ds/dist/modules/selectMenu.js'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import './css/variables.css'
import './css/ui.css'
// modules
import postUpdateElevation from './modules/postUpdateElevation'
import toggleElevationLayer from './modules/toggleElevationLayer'
import createElevationLayer from './modules/createElevationLayer'
import addElevationLayer from './modules/addElevationLayer'
import toggleDeleteButton from './modules/toggleDeleteButton'
import limitToAllowed from './modules/limitToAllowed'
import config from './modules/config'

// selections
const sectionElevationSettings = document.querySelector('[data-section="elevationSettings"]')
const sectionEmptyState = document.querySelector('[data-section="emptyState"]')
const list = document.querySelector(`[data-id="${config.ids.elevationList}"]`) as HTMLElement
const form = document.querySelector('form')
const steps = document.querySelector(`[data-id="${config.ids.steps}"]`) as HTMLInputElement
const createStyles = document.querySelector(`[data-id="${config.ids.createStyles}"]`) as HTMLInputElement
// events
onmessage = ({ data = undefined }) => {
  if (data !== undefined && data.pluginMessage !== undefined) {
    const eventData = JSON.parse(data.pluginMessage)
    if (eventData.type === 'updateProperties') {
      updatePanel(eventData.properties)
    }
    // toggle state
    toggleEmptyState(eventData.type === 'emptyState')
  }
}

const updatePanel = data => {
  steps.value = data.steps
  createStyles.checked = (data.createStyles === true)
  data.elevationLayer.forEach(layer => {
    list.appendChild(createElevationLayer(layer))
  })
  // enable select menus
  selectMenu.init()
  // disable delete if only one
  const layers = list.querySelectorAll('[data-id="elevationLayer"]') as NodeListOf<HTMLDetailsElement>
  if (layers.length === 1) {
    toggleDeleteButton(layers[0], false)
  }
  // open the first elevation layer
  toggleElevationLayer(list.querySelector('[data-id="elevationLayer"]'))
  // limit inputs
  limitToAllowed()
}

const toggleEmptyState = active => {
  if (active === true) {
    sectionEmptyState.classList.remove('hidden')
    sectionElevationSettings.classList.add('hidden')
  // hide emptyState
  } else {
    sectionEmptyState.classList.add('hidden')
    sectionElevationSettings.classList.remove('hidden')
  }
}

document.addEventListener('keyup', () => {
  // if form is valid
  if (form.checkValidity() === true) {
    postUpdateElevation(form)
  }
})
// create scale
document.getElementById('createScale').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'createScale' } }, '*')
}

document.querySelector('[data-id="add"').addEventListener('click', (event) => {
  addElevationLayer(list)
  // update if valid form
  if (form.checkValidity() === true) {
    postUpdateElevation(form)
  }
})
// submit form

form.addEventListener('submit', event => {
  // dont submit
  event.preventDefault()
  // update if valid form
  if (form.checkValidity() === true) {
    postUpdateElevation(form)
  }
})
