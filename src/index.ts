import updateElevation from './updateElevation'
import getCurrentContainer from './getCurrentContainer'
import refreshUI from './refreshUi'
// store current container
let currentContainer = getCurrentContainer(figma)
/**
 * This is were the execution of the plugin starts
 */
// initialize the ui
refreshUI(figma, currentContainer)
// run code on commands from UI
figma.ui.onmessage = msg => {
  if (msg.type === 'createScale') {
    updateElevation(figma, null, null)
  }

  if (msg.type === 'saveShadows') {
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
