const SETTINGS = {
  NAME: 'Elevation Scale',
  LAYOUT_MODE: 'VERTICAL',
  SPACING: 20,
  PADDING: 20
}

export default (figma: PluginAPI): FrameNode => {
  const container: FrameNode = figma.createFrame()
  container.name = SETTINGS.NAME
  container.layoutMode = SETTINGS.LAYOUT_MODE as 'VERTICAL' | 'NONE' | 'HORIZONTAL'
  container.primaryAxisSizingMode = 'AUTO'
  container.counterAxisSizingMode = 'AUTO'
  container.itemSpacing = SETTINGS.SPACING
  container.paddingTop = SETTINGS.PADDING
  container.paddingRight = SETTINGS.PADDING
  container.paddingBottom = SETTINGS.PADDING
  container.paddingLeft = SETTINGS.PADDING
  // return container
  return container
}
