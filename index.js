const express = require('express')
const db = require ('./db.js')
const Team = require ('./team/model.js')
const teamRouter = require ('./team/router') 
const jsonParser = require ('body-parser')
const app = express()


app.use(teamRouter)
app.use(jsonParser)

const port = process.env.PORT || 4000
app.listen(port, () => `Listening on port ${port}`)