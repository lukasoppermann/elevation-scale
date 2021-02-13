// styling
import './css/ui.css'
// modules
import postUpdateElevation from './modules/postUpdateElevation'

// selections
const elevationLayerTemplate = document.getElementById('elevationLayerTemplate') as HTMLTemplateElement
const sectionElevationSettings = document.querySelector('[data-section="elevationSettings"]')
const sectionEmptyState = document.querySelector('[data-section="emptyState"]')
const list = document.getElementById('elevationLayer')
const count = document.querySelector('[data-property="count"]') as HTMLInputElement
const createStyles = document.querySelector('[data-property="createStyles"]') as HTMLInputElement
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
  count.value = data.count
  createStyles.checked = (data.createStyles === true)
  data.elevationLayer.forEach(layer => {
    list.appendChild(createShadowLayer(layer))
  })
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

document.addEventListener('keydown', () => {
  postUpdateElevation(list, count.value, createStyles.checked)
})
// create scale
document.getElementById('createScale').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'createScale' } }, '*')
}

const createShadowLayer = (values = {}) => {
  // get clone
  const clone = elevationLayerTemplate.content.cloneNode(true) as HTMLElement
  // replace values
  for (const key in values) {
    (clone.querySelector(`[data-property="${key}"]`) as HTMLInputElement).value = values[key]
  }
  // return layer
  return clone
}

document.getElementById('add').onclick = () => {
  list.appendChild(createShadowLayer())
}

list.onclick = (e) => {
  if ((e.target as HTMLElement).dataset.action === 'deleteItem') {
    ((e.target as HTMLElement).parentNode.parentNode as HTMLElement).remove()
  }
}
