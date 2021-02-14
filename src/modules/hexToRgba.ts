import minMax from './minMax'

export default (hex: '000000', opacity: '0') => {
  // extract rgb from hex
  const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  // return rgb
  return {
    r: parseInt(r, 16) / 255, // by 255 to get rgb from 0-1
    g: parseInt(g, 16) / 255, // by 255 to get rgb from 0-1
    b: parseInt(b, 16) / 255, // by 255 to get rgb from 0-1
    a: minMax(parseInt(opacity, 10) / 100, 0, 1)
  }
}
