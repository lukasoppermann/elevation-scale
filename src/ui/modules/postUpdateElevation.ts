import config from './config'
import getElevationLayerValues from './getElevationLayerValues'

export default (form) => {
  const list = form.querySelector(`[data-id="${config.ids.elevationList}"]`) as HTMLElement
  const steps = form.querySelector(`[data-id="${config.ids.steps}"]`).value
  const createStyles = form.querySelector(`[data-id="${config.ids.createStyles}"]`).checked
  // get data for each shadow layer
  const elevationLayer = Array.from(list.querySelectorAll(`[data-id="${config.ids.elevationLayer}"]`)).map(elevationDetails => getElevationLayerValues(elevationDetails))
  // send data
  parent.postMessage({
    pluginMessage:
    {
      type: 'updateScale',
      steps,
      createStyles,
      elevationLayer
    }
  }, '*')
}
