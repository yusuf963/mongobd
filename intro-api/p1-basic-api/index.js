import express from 'express'
import logger from './middleware/logger.js'
import router from './views/router.js'

const app = express()

const startServer = () => {
  app.use(express.json())
  // app.use(logger)
  app.use('/api', router)
  // with hiven now, req is temproary variable which mean there is now usage for it now, suger syntax
  app.use((_req, res) => {
    res.send('hello from starting server')
  })
  const port = process.env.PORT || 8000
  app.listen(port, () => console.log(`server up and running on port ${port}`))
}
startServer()