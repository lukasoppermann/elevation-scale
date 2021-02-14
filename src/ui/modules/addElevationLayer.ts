import config from './config'
import createElevationLayer from './createElevationLayer'
import toggleElevationLayer from './toggleElevationLayer'

export default (list: HTMLElement) => {
  const count = parseInt(list.dataset.count) || 0
  const name = `Elevation layer ${count + 1}`
  const newElevationLayer = createElevationLayer({ name })
  // add to list
  list.appendChild(newElevationLayer)
  list.dataset.count = `${count + 1}`
  const addedLayer = Array.from(list.querySelectorAll(`[data-id=${config.ids.elevationLayer}]`)).pop() as HTMLDetailsElement
  // open new layer
  toggleElevationLayer(addedLayer)
}
