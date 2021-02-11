import parseValue from './parseValue'

const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW']

export default (index, layer) => ({
  // define elevation
  type: allowedEffectType.includes(layer.effectType) ? layer.effectType : 'DROP_SHADOW' as 'DROP_SHADOW' | 'INNER_SHADOW',
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: parseValue(layer.opacity, index) / 100 // in percent
  },
  offset: {
    x: parseValue(layer.x, index),
    y: parseValue(layer.y, index)
  },
  spread: parseValue(layer.spread, index),
  radius: parseValue(layer.blur, index),
  // defaults
  blendMode: 'NORMAL' as BlendMode,
  visible: true
})
