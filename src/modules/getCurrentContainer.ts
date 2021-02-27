import { getContainerData, storeKeys } from './containerStore'
import fixDuplicate from './fixDuplicate'

export default (figma: PluginAPI): FrameNode | null => {
  // get current selection
  const currentSelection = figma.currentPage.selection[0]
  // return if frame
  if (currentSelection !== undefined && currentSelection.type === 'FRAME' && getContainerData(currentSelection, storeKeys.ELEVATION_SETTNGS)) {
    // deal with duplicates
    fixDuplicate(currentSelection)
    // return current container
    return currentSelection as FrameNode
  }
  //
  return null
}
