const SETTINGS = {
  WIDTH: 320,
  HEIGHT: 120,
  RADIUS: 5
}

export default (index, name, elevation) => {
  // create element
  const element = figma.createRectangle()
  // set name
  element.name = `${name} ${index}`
  // set size
  element.resizeWithoutConstraints(SETTINGS.WIDTH, SETTINGS.HEIGHT)
  // set radius
  element.cornerRadius = SETTINGS.RADIUS
  // set fill to white
  element.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
  // set elevation
  element.effects = elevation
  // return
  return element
}
