import parseValue from './parseValue'
import hexToRgba from './hexToRgba'

const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW']

export default (index, layer) => {
  return {
  // define elevation
    type: allowedEffectType.includes(layer.type) ? layer.type : 'DROP_SHADOW' as 'DROP_SHADOW' | 'INNER_SHADOW',
    color: hexToRgba(layer.color, parseValue(layer.opacity, index)),
    offset: {
      x: parseValue(layer.x, index),
      y: parseValue(layer.y, index)
    },
    spread: parseValue(layer.spread, index),
    radius: parseValue(layer.radius, index),
    // defaults
    blendMode: 'NORMAL' as BlendMode,
    visible: true
  }
}
