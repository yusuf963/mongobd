import express from 'express'
import pokemon from '../controllers/pokemon.js'
const router = express.Router()

router.route('/pokemon')
  .get(pokemon.getPokemon)
  .post((req, res) => res.send('post pokemon successfully'))

router.route('/pokemon/:id')
  .get((req, res) => res.send(' pokinon deleted based on the provided Id'))

export default router