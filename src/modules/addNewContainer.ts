import createContainer from './createContainer'
import { setContainerData, getContainerData, storeKeys } from './containerStore'
import { ELEVATION_DEFAULTS } from './defaults'

export default (figma: PluginAPI) => {
  // create new container
  const container = createContainer(figma)
  // append to current page
  figma.currentPage.appendChild(container)
  // add default data
  setContainerData(container, storeKeys.ELEVATION_SETTNGS, ELEVATION_DEFAULTS)
  // select new container
  return container
}
