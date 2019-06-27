const express = require('express')
const bodyParser = require('body-parser')
const loginRouter = require('./')

const db = require ('./db.js')
const Team = require ('./team/model.js')
const teamRouter = require ('./team/router') 
const userRouter = require ('./auth/router')

const app = express()
const jsonParser = bodyParser.json()

app.use(teamRouter)
app.use(jsonParser)
app.use(userRouter)

app.get('/', (req, res) => res.send('hello there'))

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listening on port ${port}`))
