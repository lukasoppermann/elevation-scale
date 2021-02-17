import updateElevation from './modules/updateElevation'
import getCurrentContainer from './modules/getCurrentContainer'
import refreshUI from './modules/refreshUi'
// store current container
let currentContainer = getCurrentContainer(figma)
/**
 * This is were the execution of the plugin starts
 */
refreshUI(figma, currentContainer)
// run code on commands from UI
figma.ui.onmessage = msg => {
  // create a new scale
  if (msg.type === 'createScale') {
    updateElevation(figma, null, null)
  }
  // update an exsisting scale
  if (msg.type === 'updateScale') {
    updateElevation(figma, currentContainer, msg)
  }
}
// update ui if selection changes
figma.on('selectionchange', () => {
  // get updated selection
  const updatedContainer = getCurrentContainer(figma)
  // if new selection !== old selection run bootUI again
  if (updatedContainer !== currentContainer) {
    currentContainer = updatedContainer
    // refresh UI
    refreshUI(figma, currentContainer)
  }
})
