import pokemonData from '../modles/pokemonData.js'

const getPokemon = (_req, res) => {
  res.send(pokemonData)
} 

export default {
  getPokemon
}