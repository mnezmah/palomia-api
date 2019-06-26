const { Router } = require('express')
const Team = require('./model')

const router = new Router()

// router.get('/team', (request, response) => response.send(Team.findAll()))
// router.post('/team', (request, response) => response.send(Team.create()))

router.get('/team', (req, res, next) => {
  Team.findAll()
    .then(teams => {
      res.status(200)
        .json({ teams })
        .send(teams)
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})

router.post('/team', (req, res) => {
  Team.create(req.body)
    .then(newTeam => { if(newTeam.name)
      res.status(200)
        .json({ team })
        .send(newTeam)
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})

// router.post('/team', (req, res, next) => {
//   Team.create(req.body)
//       .then(newTeam => {
//         if(newTeam.name) { return res.status(200).send(newTeam) }
//         next()
//       })
//       .catch(err => res.status(500).send(next(err)))
// })

module.exports = router