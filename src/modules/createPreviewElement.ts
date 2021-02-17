const SETTINGS = {
  WIDTH: 320,
  HEIGHT: 120,
  RADIUS: 5,
  NAME: 'Elevation'
}

export default (index, elevationLayers) => {
  // remove name from layers
  const effects = elevationLayers.map(layer => {
    const { name, ...effects } = layer
    // retuzrn effects only
    return effects
  })
  // create element
  const element = figma.createRectangle()
  // set name
  element.name = `${SETTINGS.NAME} ${index}`
  // set size
  element.resizeWithoutConstraints(SETTINGS.WIDTH, SETTINGS.HEIGHT)
  // set radius
  element.cornerRadius = SETTINGS.RADIUS
  // set fill to white
  element.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
  // set elevation
  element.effects = effects
  // return
  return element
}
