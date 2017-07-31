var express = require('express')
import bodyParser from 'body-parser'
var cors = require('cors')
import routes from './routes'
import yelpController from './controllers/yelpController'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/api', routes)

app.post('/', yelpController.postSearch)

export default app
