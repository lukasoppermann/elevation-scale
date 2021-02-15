import config from './config'
import createElevationLayer from './createElevationLayer'
import toggleDeleteButton from './toggleDeleteButton'
import toggleElevationLayer from './toggleElevationLayer'

export default (list: HTMLElement) => {
  const count = parseInt(list.dataset.count) || 0
  const name = `Elevation layer ${count + 1}`
  const newElevationLayer = createElevationLayer({ name })
  // add to list
  list.appendChild(newElevationLayer)
  list.dataset.count = `${count + 1}`
  const layers = list.querySelectorAll(`[data-id=${config.ids.elevationLayer}]`) as NodeListOf<HTMLDetailsElement>
  const addedLayer = Array.from(layers).pop() as HTMLDetailsElement
  // enabled delete
  layers.forEach(layer => toggleDeleteButton(layer, true))
  // open new layer
  toggleElevationLayer(addedLayer)
}
