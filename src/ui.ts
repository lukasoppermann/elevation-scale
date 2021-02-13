const updatePanel = (data, count, createStyles, list, createShadowLayer) => {
  count.value = data.count
  createStyles.checked = (data.createStyles === true)
  data.elevationLayer.forEach(layer => {
    list.appendChild(createShadowLayer(layer))
  })
}
