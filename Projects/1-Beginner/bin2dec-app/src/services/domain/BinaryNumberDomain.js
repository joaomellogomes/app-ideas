export function isBinary(text = '') {
  return Boolean(text.match(/^[0-1]+$/g))
}

export function toDecimal(text = '') {
  const decimalNumber = text
    .split('')
    .map(Number)
    .reverse()
    .reduce((acc, currentValue, index) => acc + Math.pow(2, index) * currentValue, 0)

  return decimalNumber
}

export default { isBinary, toDecimal }
