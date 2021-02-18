import config from './config'
import setColorPreview from './setColorPreview'

export default (layer: HTMLDetailsElement, toggleLayer = true) => {
  const allLayers = layer.parentNode.querySelectorAll(`[data-id=${config.ids.elevationLayer}]`)

  Array.from(allLayers).forEach((item: HTMLDetailsElement) => {
    // item.open = true
    if (item !== layer) {
      item.open = false
    }
    if (item === layer && toggleLayer === true) {
      item.open = true
      setColorPreview(item)
    }
  })
}
