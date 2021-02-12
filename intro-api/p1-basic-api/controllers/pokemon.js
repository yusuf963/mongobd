import pokemonData from '../modles/pokemonData.js'

const getPokemon = (req, res) => {
  res.send(pokemonData)
}

const getSinglePokemon = (req, res) => {
  res.send('single pokemon')
}

const makePokemon = (req, res) => {
  const body = req.body
  pokemonData.push(body)
  res.send(body)
}
const deletPokemon = (req, res) => {
  const deletedpokemon = Number(req.params.id)
  const allPokemonsButNotTheDeletedOne = pokemonData.filter(pokemon => {
    return pokemon.id === !deletedpokemon
  })
  res.send(allPokemonsButNotTheDeletedOne)
}

export default {
  getPokemon,
  getSinglePokemon,
  makePokemon,
  deletPokemon
}