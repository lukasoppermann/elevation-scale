import createStyles from './createStyles'
import { getContainerData, setContainerData, storeKeys } from './containerStore'
import createPreviewElement from './createPreviewElement'
import createElevationLayer from './createElevationLayer'

export default (figma: PluginAPI, container, data) => {
  const focusNodes: SceneNode[] = []
  // remove children nodes
  data.steps = parseInt(data.steps)
  container.children.forEach(child => child.remove())
  // get styles
  const containerData = getContainerData(container, storeKeys.ELEVATION_SETTNGS)
  data.styles = containerData.styles || []
  // add updated children nodes
  for (let i = 0; i < data.steps; i++) {
    // get elevation
    const elevation = [...data.elevationLayer].map(layer => {
      return createElevationLayer(i, layer)
    })
    // elevation name
    const elevationName = `Elevation / ${i}`
    // create elements
    const previewElements = createPreviewElement(i, elevation)
    // append to container
    container.appendChild(previewElements)
    focusNodes.push(previewElements)
    // create styles
    if (data.createStyles === true) {
      const style = createStyles(elevation, data.styles[i] || null, elevationName)
      data.styles[i] = style.id
    }
  }
  // zoom to container if new
  figma.viewport.scrollAndZoomIntoView(focusNodes)
  // elevation settings
  setContainerData(container, storeKeys.ELEVATION_SETTNGS, data)
  // append & select
  figma.currentPage.selection = [container]
}
