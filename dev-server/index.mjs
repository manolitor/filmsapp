import express from 'express'
import { registerRoutes } from './routes.mjs'
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDb } from './config/db.mjs'

const app = express()
connectToDb()
const port = 5000

app.use(bodyParser.json()) // Allows parsing JSON from the client
app.use(morgan('combined')) // Log HTTP Requests to the node console (for debugging purposes)
app.use(cors()) // Enable Cross Origin Requests, since Vue.JS is on a different origin

registerRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})