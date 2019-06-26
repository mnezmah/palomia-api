const Router = require('Router')
const Team = require('./model')

Router.get('/team', (req, res) => {
  Team.findAll()
  .then( teams => {
    res.json({teams})
  } )
  .catch()
})