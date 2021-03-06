const allowedCodes = [
  'Backspace',
  'ArrowLeft',
  'ArrowRight',
  'Delete',
  'Shift',
  'Tab'
]

const restrictChars = event => {
  // get input
  const input = event.target
  const regexPattern = new RegExp(input.pattern, 'i')
  // prevent input if not allowed
  if (!allowedCodes.includes(event.code) && !regexPattern.test(event.key)) {
    event.preventDefault()
  }
}

export default () => {
  const inputs = document.querySelectorAll('input[pattern]')
  //
  inputs.forEach((input) => {
    input.addEventListener('keydown', restrictChars)
  })
}
