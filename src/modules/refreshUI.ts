import { getContainerData, storeKeys } from './containerStore'

const SETTINGS = {
  LAYER_SIZE: 40,
  BASE_SIZE: 450
}

export default (figma: PluginAPI, container: FrameNode | undefined) => {
  const UI_WIDTH = 360
  let UI_HEIGHT = 500
  // show the html ui
  figma.showUI(__html__, {
    width: UI_WIDTH,
    height: UI_HEIGHT
  })
  // if selected container
  if (container !== null) {
    const elevationProperties = getContainerData(container, storeKeys.ELEVATION_SETTNGS)
    UI_HEIGHT = SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * elevationProperties.elevationLayer.length
    // update UI size
    figma.ui.resize(UI_WIDTH, UI_HEIGHT)
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
