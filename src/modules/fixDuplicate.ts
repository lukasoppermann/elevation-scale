import { getContainerData, setContainerData, storeKeys } from './containerStore'

export default currentContainer => {
  const containerData = getContainerData(currentContainer, storeKeys.ELEVATION_SETTNGS)
  // remove styles if container was duplicated
  if (containerData.containerId !== null && containerData.containerId !== currentContainer.id) {
    containerData.styles = []
    containerData.createStyles = false
  }
  // add container id
  containerData.containerId = currentContainer.id
  // update container data
  setContainerData(currentContainer, storeKeys.ELEVATION_SETTNGS, containerData)
}
