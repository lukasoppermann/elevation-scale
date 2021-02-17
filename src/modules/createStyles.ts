export default (i, elevation, styleName = 'Elevation') => {
  const style = figma.createEffectStyle()
  style.name = `${styleName}/${i}`

  const effects = elevation.map(layer => {
    const { name, ...effects } = layer
    // retuzrn effects only
    return effects
  })

  style.effects = effects

  return style
}
