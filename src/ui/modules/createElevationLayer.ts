import config from './config'
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
    self.remove()
    console.log('toggle first item in list')
    console.log('if last item, add a new one so that the list is never empty')
    // toggleElevationLayer()
  })
  // return layer
  return clone
}
