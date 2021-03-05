export default (form: HTMLFormElement) => {
  const inputs: HTMLInputElement[] = Array.from(form.querySelectorAll('input'))
  // repare value for highlighting
  const prepareValue = (value: string) => {
    // highlight operators
    value = value.replaceAll(/[\*\+-]/gi, '<span class="hl_operator">$&</span>')
    // slash operator
    value = value.replaceAll(/(?<!\<)\//gi, '<span class="hl_operator">$&</span>')
    // parenthese
    value = value.replaceAll(/[\(\)]/gi, '<span class="hl_parenthese">$&</span>')
    // highlight double #
    value = value.replaceAll(/##/gi, '<span class="hl_hash">##</span>')
    // highlight #
    value = value.replaceAll(/(?<!#)#(?!#)/gi, '<span class="hl_hash">#</span>')
    // return value
    return value
  }
  // leave form field
  const onBlur = (event) => {
    const input: HTMLInputElement = event.target as HTMLInputElement
    const overlay = input.parentNode.querySelector('.input__overlay')
    if (overlay !== null) {
      overlay.innerHTML = prepareValue(input.value) || ''
      overlay.classList.remove('hidden')
    }
  }
  // leave form field
  const onFocus = (event: Event) => {
    const input: HTMLInputElement = event.target as HTMLInputElement
    const overlay = input.parentNode.querySelector('.input__overlay')
    if (overlay !== null) {
      overlay.classList.add('hidden')
    }
  }
  // bind events
  inputs.forEach(input => {
    onBlur({ target: input })
    // blur
    input.addEventListener('blur', onBlur)
    // focus
    input.addEventListener('focus', onFocus)
  })
}
