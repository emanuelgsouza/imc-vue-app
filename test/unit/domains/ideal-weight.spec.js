import { ideialWeight } from '@/domains/calculus'

describe('Calculando o peso ideial para o homem', function() {
  it('Com 1.70 de altura', () => {
    const expected = {
      minWeightIdeal: '59.82',
      maxWeightIdeal: '76.27'
    }

    expect(ideialWeight(1.70, 'M')).toEqual(expected)
  })

  it('0 de altura', () => {
    const expected = {
      minWeightIdeal: '0.00',
      maxWeightIdeal: '0.00'
    }

    expect(ideialWeight(0, 'M')).toEqual(expected)
  })
})

describe('Calculando o peso ideial para uma mulher', function() {
  it('Com 1.55 de altura', () => {
    const expected = {
      minWeightIdeal: '45.89',
      maxWeightIdeal: '61.96'
    }

    expect(ideialWeight(1.55, 'F')).toEqual(expected)
  })

  it('0 de altura', () => {
    const expected = {
      minWeightIdeal: '0.00',
      maxWeightIdeal: '0.00'
    }

    expect(ideialWeight(0, 'F')).toEqual(expected)
  })
})
