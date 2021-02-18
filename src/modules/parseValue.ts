const placeholders = {
  INDEX: '#'
}

export default (value, index) => {
  // replace placeholders in string
  if (typeof value === 'string') {
    value = value
      // replace comma
      .replace(',', '.')
      // replace space
      .replace(' ', '')
      // replace 0 at beginning
      .replace(/^0+/i, '')
      // replace 0 after char
      .replace(/(\+|\*|\/|-|#)(0)(.)/i, '$1')
      // replace placeholder with index
      .replace(placeholders.INDEX, index)
    // replace leading zeros
  }
  // eval and parse int
  try {
    value = parseFloat(eval(value))
    if (!isNaN(value)) {
      return value
    }
  } catch (e) {
    console.error(e)
  }
  return 0
}
