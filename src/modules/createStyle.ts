export default (elevation, styleId = null, styleName = 'Elevation') => {
  // get or create new style
  const style = figma.getStyleById(styleId) as EffectStyle || figma.createEffectStyle()
  // set style name
  style.name = styleName
  // replace if missing
  if (styleName === null || styleName.trim() === '') {
    style.name = 'Elevation'
  }
  // set effects
  const effects = elevation.map(layer => {
    const { name, ...effects } = layer
    // return effects only
    return effects
  })

  style.effects = effects

  return style
}
