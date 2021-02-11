export const storeKeys = {
  ELEVATION_SETTNGS: 'elevationSettings'
}

const isValidContainer = (container: SceneNode): boolean => {
  if (container !== undefined && container !== null) {
    return true
  }
  return false
}

export const setContainerData = (container: FrameNode, key: string, data: any): void => {
  if (isValidContainer(container)) {
    if (typeof data === 'object') {
      container.setPluginData(key, JSON.stringify(data))
    }
    if (typeof data === 'number' || typeof data === 'string') {
      container.setPluginData(key, data as string)
    }
  }
}

export const getContainerData = (container: FrameNode, key: string) => {
  if (isValidContainer(container)) {
    try {
      const jsonString = JSON.parse(container.getPluginData(key))
      return jsonString
    } catch (e) {

    }
    return container.getPluginData(key)
  }
  return null
}
