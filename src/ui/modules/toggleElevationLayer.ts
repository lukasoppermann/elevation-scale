import config from './config'

export default (layer: HTMLDetailsElement, toggleLayer = true) => {
  const allLayers = layer.parentNode.querySelectorAll(`[data-id=${config.ids.elevationLayer}]`)
  console.log('layerl', layer)
  Array.from(allLayers).forEach((item: HTMLDetailsElement) => {
    // item.open = true
    if (item !== layer) {
      console.log(item)
      item.open = false
    }
    if (item === layer && toggleLayer === true) {
      item.open = true
    }
  })
}
