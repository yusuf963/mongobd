import express from 'express'
import logger from './middleware/logger.js'
import router from './views/router.js'
console.log(router)

const app = express()

const startServer = () => {
  app.use(express.json())
  app.use(logger)
  console.log(logger)
  app.use('/api', router)
  //req is temproary converted into variable if you 
  app.use((_req, res) => {
    res.send('hello from starting server')
  })
  app.listen(8000, () => console.log('server up and running on port 8000'))
}
startServer()