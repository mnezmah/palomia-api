const express = require('express')
const jsonParser = require('body-parser')
const loginRouter = require('./')

const db = require ('./db.js')
const Team = require ('./team/model.js')
const teamRouter = require ('./team/router') 
const userRouter = require ('./auth/router')

const app = express()


app.use(teamRouter)
app.use(jsonParser)
app.use(userRouter)

const port = process.env.PORT || 4100
app.listen(port, () => `Listening on port ${port}`)