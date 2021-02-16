import config from './config'
import createElevationLayer from './createElevationLayer'
import toggleDeleteButton from './toggleDeleteButton'
import toggleElevationLayer from './toggleElevationLayer'
import selectMenu from 'figma-plugin-ds/dist/modules/selectMenu.js'

export default (list: HTMLElement) => {
  const steps = parseInt(list.dataset.steps) || 0
  const name = `Elevation layer ${steps + 1}`
  const newElevationLayer = createElevationLayer({ name })
  // add to list
  list.appendChild(newElevationLayer)
  list.dataset.steps = `${steps + 1}`
  const layers = list.querySelectorAll(`[data-id=${config.ids.elevationLayer}]`) as NodeListOf<HTMLDetailsElement>
  const addedLayer = Array.from(layers).pop() as HTMLDetailsElement
  // init select menu
  selectMenu.init()
  // enabled delete
  layers.forEach(layer => toggleDeleteButton(layer, true))
  // open new layer
  toggleElevationLayer(addedLayer)
}
