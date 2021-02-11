import { getContainerData, storeKeys } from './containerStore'

const SETTINGS = {
  LAYER_SIZE: 40,
  BASE_SIZE: 450
}

export default (figma: PluginAPI, container: FrameNode | undefined) => {
  // if selection:
  // -> count layers
  // resize height
  // prepare properties
  const elevationProperties = {
    ...getContainerData(container, storeKeys.ELEVATION_SETTNGS)
  }
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
