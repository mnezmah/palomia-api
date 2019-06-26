const { Router } = require('express')
const Team = require('./model')

const router = new Router()




router.get(
  '/team',
  (req, res, next) =>
    Team
      .findAll()
      .then(teams => res.send(teams))
      .catch(err => next(err))
)

router.post('/team', (req, res) => {
  Team.create(req.body)
    .then(newTeam => {
      if (newTeam.name) {
        return res.status(200)
          // .json({ team })
          .send(newTeam)
      } next()
    })
    .catch(err =>
      res.status(500).send(next(err))
    )
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