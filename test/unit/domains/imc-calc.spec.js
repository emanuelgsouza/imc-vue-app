import { imcCalc } from '@/domains/calculus'

// TODO: acrescentar mais testes
describe('IMC Calc function', () => {
  it('Heigth 1,70m and weight 80kg', () => {
    expect(imcCalc(80, 1.70)).toBe('27.68')
  })
})
