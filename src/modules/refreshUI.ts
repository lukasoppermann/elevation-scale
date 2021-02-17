import { getContainerData, storeKeys } from './containerStore'
import minMax from './minMax'

const SETTINGS = {
  LAYER_SIZE: 40,
  BASE_SIZE: 562,
  UI_WIDTH: 360,
  EMPTY_STATE_WIDTH: 360,
  EMPTY_STATE_HEIGHT: 160
}

export default (figma: PluginAPI, container: FrameNode | undefined) => {
  // show the html ui
  figma.showUI(__html__, {
    width: SETTINGS.EMPTY_STATE_WIDTH,
    height: SETTINGS.EMPTY_STATE_HEIGHT
  })
  // if selected container
  if (container !== null) {
    const elevationProperties = getContainerData(container, storeKeys.ELEVATION_SETTNGS)
    const UI_HEIGHT = minMax(SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * (elevationProperties.elevationLayer.length + 2), 300, figma.viewport.bounds.height - 80)
    // update UI size
    figma.ui.resize(SETTINGS.UI_WIDTH, UI_HEIGHT)
    // send data to UI
    figma.ui.postMessage(JSON.stringify({
      type: 'updateProperties',
      properties: elevationProperties
    }))
  }
  // if no container is selected
  else {
    figma.ui.postMessage(JSON.stringify({
      type: 'emptyState'
    }))
  }
}
