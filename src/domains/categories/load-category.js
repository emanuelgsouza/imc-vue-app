import loadIndex from './load-index'

const messages = [
  null,
  'Abaixo do peso',
  'Peso normal',
  'Um pouco acima do peso',
  'Acima do peso',
  'Obeso'
]

const loadCategory = (genre, imc) => {
  const loadByGenre = loadIndex(genre)
  const index = loadByGenre(imc)
  return messages[ index ]
}

export default loadCategory
