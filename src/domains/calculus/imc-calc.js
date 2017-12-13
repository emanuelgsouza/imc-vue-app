/**
 * @method imcCalc
 * @param  {Number} heigth
 * @param  {Number} weight
 * @return {Number}
 */
const imcCalc = (weight, heigth) => {
  const result = weight / Math.pow(heigth, 2)
  return result.toFixed(2)
}

export default imcCalc
