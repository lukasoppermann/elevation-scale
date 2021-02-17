const placeholders = {
  INDEX: '#'
}

export default (value, index) => {
  // replace placeholders in string
  if (typeof value === 'string') {
    value = value.replace(' ', '').replace(placeholders.INDEX, index)
  }
  // eval and parse int
  try {
    value = parseFloat(eval(value))
    if (!isNaN(value)) {
      return value
    }
  } catch (e) {
    console.log(e)
  }
  return 0
}
