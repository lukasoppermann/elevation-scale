const placeholders = {
  INDEX: '#'
}

export default (valueString, index) => {
  // replace placeholders in string
  const preparedString = valueString.replace(placeholders.INDEX, index)
  return parseInt(eval(preparedString), 10)
}
