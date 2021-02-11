import { getContainerData, storeKeys } from './containerStore'

export default (figma: PluginAPI): FrameNode | null => {
  // get current selection
  const currentSelection = figma.currentPage.selection[0]
  // return if frame
  if (currentSelection !== undefined && currentSelection.type === 'FRAME' && getContainerData(currentSelection, storeKeys.ELEVATION_SETTNGS)) {
    return currentSelection as FrameNode
  }
  //
  return null
}
