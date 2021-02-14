export default (number: number, min: number, max: number) => {
  // return min if number smaller
  if (number < min) {
    return min
  }
  // return max if number bigger
  if (number > max) {
    return max
  }
  // return number if between
  return number
}
