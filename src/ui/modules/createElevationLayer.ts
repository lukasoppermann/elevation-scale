import config from './config'
import toggleDeleteButton from './toggleDeleteButton'
import toggleElevationLayer from './toggleElevationLayer'

export default (values = {}) => {
  // get clone
  const template = document.querySelector('[data-id="elevationLayerTemplate"]') as HTMLTemplateElement
  const clone = template.content.cloneNode(true) as DocumentFragment
  const self = clone.querySelector('details') as HTMLDetailsElement
  self.dataset.id = config.ids.elevationLayer
  // replace values
  for (const key in values) {
    (clone.querySelector(`[data-property="${key}"]`) as HTMLInputElement).value = values[key]
  }
  // attach events
  // Open Layer
  self.addEventListener('click', (e) => {
    // if the item was closed
    if (self.open === false) {
      toggleElevationLayer(self, false)
    }
  })
  // Delete layer
  clone.querySelector('[data-id="deleteButton"]').addEventListener('click', (e) => {
    e.preventDefault()
    const parent = self.parentNode
    // only allow deletion if not last item
    if (parent.querySelectorAll(`[data-id="${config.ids.elevationLayer}"]`).length > 1) {
      self.remove()
    }
    // get all layers
    const layers = parent.querySelectorAll(`[data-id="${config.ids.elevationLayer}"]`) as NodeListOf<HTMLDetailsElement>
    // disable delete if only one
    if (layers.length === 1) {
      toggleDeleteButton(layers[0], false)
    }
    // { console.log('toggle first item in list') }
    toggleElevationLayer(layers[0])
  })
  // return layer
  return clone
}
