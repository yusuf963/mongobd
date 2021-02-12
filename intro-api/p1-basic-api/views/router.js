import express from 'express'
import pokemon from '../controllers/pokemon.js'
const router = express.Router()

router.route('/pokemon')
  .get(pokemon.getPokemon)
  .post(pokemon.makePokemon)

router.route('/pokemon/:id')
  .get((req, res) => res.send(pokemon.getSinglePokemon))
  .delete((req, res) => res.send(pokemon.deletPokemon))

export default router

//kill $(lsof -t -i:8000)