import loadCategory from '@/domains/categories/load-category'
import * as GENRE from '@/domains/categories/genres'

describe('loadCategory para categoria feminino', () => {
  it('Mostra Abaixo do peso quando com 17.2 de imc', () => {
    expect(loadCategory(GENRE.FEMALE, 17.2)).toBe('Abaixo do peso')
  })

  it('Mostra Peso normal quando com 20 de imc', () => {
    expect(loadCategory(GENRE.FEMALE, 20)).toBe('Peso normal')
  })
  it('Mostra Um pouco acima do peso quando com 27 de imc', () => {
    expect(loadCategory(GENRE.FEMALE, 27)).toBe('Um pouco acima do peso')
  })

  it('Mostra Acima do peso quando com 29 de imc', () => {
    expect(loadCategory(GENRE.FEMALE, 29)).toBe('Acima do peso')
  })

  it('Mostra Obeso quando com 33 de imc', () => {
    expect(loadCategory(GENRE.FEMALE, 33)).toBe('Obeso')
  })

  it('Mostra string null quando é numero negativo', () => {
    expect(loadCategory(GENRE.FEMALE, -1)).toBeNull()
  })
})

describe('loadCategory para categoria masculino', () => {
  it('Mostra Abaixo do peso quando com 17 de imc', () => {
    expect(loadCategory(GENRE.MALE, 17)).toBe('Abaixo do peso')
  })

  it('Mostra Peso normal quando com 20 de imc', () => {
    expect(loadCategory(GENRE.MALE, 20.7)).toBe('Peso normal')
  })

  it('Mostra Um pouco acima do peso quando com 27 de imc', () => {
    expect(loadCategory(GENRE.MALE, 27)).toBe('Um pouco acima do peso')
  })

  it('Mostra Acima do peso quando com 29 de imc', () => {
    expect(loadCategory(GENRE.MALE, 29)).toBe('Acima do peso')
  })

  it('Mostra Obeso quando com 33 de imc', () => {
    expect(loadCategory(GENRE.MALE, 33)).toBe('Obeso')
  })

  it('Mostra string null quando é numero negativo', () => {
    expect(loadCategory(GENRE.MALE, -1)).toBeNull()
  })
})
