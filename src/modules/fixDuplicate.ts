import { getContainerData, setContainerData, storeKeys } from './containerStore'

export default currentContainer => {
  const containerData = getContainerData(currentContainer, storeKeys.ELEVATION_SETTNGS)
  // remove styles if container was duplicated
  console.log(containerData, currentContainer.id)
  if (containerData.containerId !== null && containerData.containerId !== currentContainer.id) {
    containerData.styles = []
  }
  // add container id
  containerData.containerId = currentContainer.id
  console.log('now', containerData)
  // update container data
  setContainerData(currentContainer, storeKeys.ELEVATION_SETTNGS, containerData)
}
