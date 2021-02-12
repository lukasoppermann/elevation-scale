import { getContainerData, storeKeys } from './containerStore'

const SETTINGS = {
  LAYER_SIZE: 40,
  BASE_SIZE: 450
}

const UI_DEFAULTS = {
  count: 5,
  createStyles: false,
  elevationLayers: [{
    type: 'dropshadow',
    color: '000000',
    opacity: '10 + #',
    x: 0,
    y: '0.5 * #',
    spread: '2 * #',
    radius: '#'
  }]
}

export default (figma: PluginAPI, container: FrameNode | undefined) => {
  // if selection:
  // -> count layers
  // resize height
  // prepare properties
  const elevationProperties = getContainerData(container, storeKeys.ELEVATION_SETTNGS) || UI_DEFAULTS
  // show the html ui
  figma.showUI(__html__, {
    width: 300,
    height: SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * 1
  })
  // send data to UI
  figma.ui.postMessage(JSON.stringify({
    type: 'updateProperties',
    properties: elevationProperties
  }))
}
