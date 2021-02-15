export default (layer: HTMLDetailsElement, enable:boolean = true) => {
  const button = layer.querySelector('[data-id="deleteButton"]')
  if (enable === true) {
    button.classList.remove('disabled')
  } else {
    button.classList.add('disabled')
  }
}
