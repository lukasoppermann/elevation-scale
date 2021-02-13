const placeholders = {
  INDEX: '#'
}

export default (value, index) => {
  // replace placeholders in string
  if (typeof value === 'string') {
    value = value.replace(placeholders.INDEX, index)
  }
  // eval and parse int
  try {
    value = parseInt(eval(value), 10)
    if (!isNaN(value)) {
      return value
    }
  } catch (e) {
    console.log(e)
  }
  return 0
}
