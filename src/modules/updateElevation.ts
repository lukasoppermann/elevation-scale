import createStyles from './createStyles'
import { setContainerData, storeKeys } from './containerStore'
import createPreviewElement from './createPreviewElement'
import createElevationLayer from './createElevationLayer'
import createContainer from './createContainer'
import { ELEVATION_DEFAULTS } from './defaults'

export default (figma, container, data) => {
  const focusNodes: SceneNode[] = []
  let newContainer = false
  // add new node
  if (!container) {
    container = createContainer()
    figma.currentPage.appendChild(container)
    newContainer = true
    data = ELEVATION_DEFAULTS
  }
  // remove children nodes
  else {
    data.steps = parseInt(data.steps)
    container.children.forEach(child => child.remove())
  }

  for (let i = 0; i < data.steps; i++) {
    // get elevation
    const elevation = [...data.elevationLayer].map(layer => {
      return createElevationLayer(i, layer)
    })
    // create elements
    const previewElements = createPreviewElement(i, elevation)
    // append to container
    container.appendChild(previewElements)
    focusNodes.push(previewElements)
    // create styles
    createStyles(i, elevation, data.createStyles)
  }
  // zoom to container if new
  if (newContainer === true) {
    figma.viewport.scrollAndZoomIntoView(focusNodes)
  }
  // append & select
  figma.currentPage.selection = [container]
  // elevation settings
  setContainerData(container, storeKeys.ELEVATION_SETTNGS, data)
}
