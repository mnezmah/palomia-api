const express = require('express')
const db = require ('./db')
const app = express()



const port = process.env.PORT || 4001
app.listen(port, () => console.log('Listening on port ${port}'))