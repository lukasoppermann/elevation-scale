import getElevationLayerValues from './getElevationLayerValues'

export default (list, count, createStyles) => {
  // get data for each shadow layer
  const elevationLayer = Array.from(list.querySelectorAll('details')).map(shadowDetails => getElevationLayerValues(shadowDetails))
  // send data
  parent.postMessage({
    pluginMessage:
    {
      type: 'updateScale',
      count: count,
      createStyles: createStyles,
      elevationLayer
    }
  }, '*')
}
