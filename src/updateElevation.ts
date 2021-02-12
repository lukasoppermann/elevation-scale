import createStyles from './createStyles'
import { setContainerData, storeKeys } from './containerStore'
import createPreviewElement from './createPreviewElement'
import createElevationLayer from './createElevationLayer'
import createContainer from './createContainer'

const ELEVATION_LAYER_NAME = 'Elevation'

export default (figma, container, data) => {
  const focusNodes: SceneNode[] = []
  let newContainer = false
  // add new node
  if (!container) {
    container = createContainer()
    figma.currentPage.appendChild(container)
    newContainer = true
  }
  // remove children nodes
  else {
    container.children.forEach(child => child.remove())
  }

  for (let i = 0; i < data.count; i++) {
    // get elevation
    const elevation = [...data.elevationLayer].map(layer => createElevationLayer(i, layer))
    // create elements
    const previewElements = createPreviewElement(i, ELEVATION_LAYER_NAME, elevation)
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
