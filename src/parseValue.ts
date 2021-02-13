const placeholders = {
  INDEX: '#'
}

export default (value, index) => {
  // replace placeholders in string
  if (typeof value === 'string') {
    value = value.replace(placeholders.INDEX, index)
  }
  // eval and parse int
  return parseInt(eval(value), 10)
}
