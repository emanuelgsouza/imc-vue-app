import { imcCalc } from '@/domains/calculus'

describe('Função que calcula IMC', () => {
  it('Altura de 1,70m com peso de 80kg retorna 27.68', () => {
    expect(imcCalc(80, 1.70)).toBe('27.68')
  })

  it('Altura de 2m com peso de 100kg retorna 25.00', () => {
    expect(imcCalc(100, 2)).toBe('25.00')
  })

  it('Altura de -1,70m com peso de 80kg retorna 0', () => {
    expect(imcCalc(80, -1.70)).toBe(0)
  })

  it('Altura de -1,70m com peso de -80kg retorna 0', () => {
    expect(imcCalc(-80, -1.70)).toBe(0)
  })

  it('Altura de 1,70m com peso de -80kg retorna 0', () => {
    expect(imcCalc(-80, 1.70)).toBe(0)
  })

  it('Altura de 0m com peso de 100kg retorna 0', () => {
    expect(imcCalc(100, 0)).toBe(0)
  })
})
