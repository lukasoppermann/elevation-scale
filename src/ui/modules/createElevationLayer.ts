import config from './config'
import postUpdateElevation from './postUpdateElevation'
import toggleDeleteButton from './toggleDeleteButton'
import toggleElevationLayer from './toggleElevationLayer'

export default (values = {}) => {
  // get clone
  const template = document.querySelector('[data-id="elevationLayerTemplate"]') as HTMLTemplateElement
  const clone = template.content.cloneNode(true) as DocumentFragment
  let self = clone.querySelector('details') as HTMLDetailsElement
  self.dataset.id = config.ids.elevationLayer
  // replace values
  for (const key in values) {
    (clone.querySelector(`[data-property="${key}"]`) as HTMLInputElement).value = values[key]
  }
  // attach events
  // Open Layer via click
  self.addEventListener('click', (e) => {
    // if the item was closed
    if (self.open === false) {
      toggleElevationLayer(self, false)
    }
  })
  // Open Layer via focus
  self.querySelector('[data-property="name"]').addEventListener('click', event => {
    toggleElevationLayer(self, true)
  })
  // Delete layer
  clone.querySelector('[data-id="deleteButton"]').addEventListener('click', (e) => {
    e.stopPropagation()
    const parent = self.parentNode
    const form = self.closest('form')
    // only allow deletion if not last item
    if (parent.querySelectorAll(`[data-id="${config.ids.elevationLayer}"]`).length > 1) {
      self.remove()
      self = null
    }
    // get all layers
    const layers = parent.querySelectorAll(`[data-id="${config.ids.elevationLayer}"]`) as NodeListOf<HTMLDetailsElement>
    // disable delete if only one
    if (layers.length === 1) {
      toggleDeleteButton(layers[0], false)
    }
    // update list
    if (form.checkValidity() === true) {
      postUpdateElevation(form)
    }
    // open element
    toggleElevationLayer(parent.querySelector(`[data-id="${config.ids.elevationLayer}"]`))
    //
    return false
  })
  // return layer
  return clone
}
