import updateElevation from './modules/updateElevation'
import getCurrentContainer from './modules/getCurrentContainer'
import refreshUI from './modules/refreshUi'
import addNewContainer from './modules/addNewContainer'
import { ELEVATION_DEFAULTS } from './modules/defaults'
/**
 * This is were the execution of the plugin starts
 */
refreshUI(figma, getCurrentContainer(figma))
// run code on commands from UI
figma.ui.onmessage = msg => {
  // create a new scale
  if (msg.type === 'createScale') {
    // create new container
    const newContainer = addNewContainer(figma)
    // update container
    updateElevation(figma, newContainer, {
      type: 'updateScale',
      ...ELEVATION_DEFAULTS
    })
  }
  // update an exsisting scale
  if (msg.type === 'updateScale') {
    updateElevation(figma, getCurrentContainer(figma), msg)
  }
}
// update ui if selection changes
figma.on('selectionchange', () => {
  refreshUI(figma, getCurrentContainer(figma))
})
