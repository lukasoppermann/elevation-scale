export default (elevationLayer: HTMLDetailsElement) => {
  const color: HTMLInputElement = elevationLayer.querySelector('[data-id="color"]')
  const colorPreview: HTMLElement = elevationLayer.querySelector('[data-id="colorPreview"]')
  // set to color
  colorPreview.style.backgroundColor = color.value.length === 6 ? color.value : '000000'
}
