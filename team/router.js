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


router.get(
  '/team/:id',
  (req, res, next) => {
    const id = req.params.id

    Team
      .findByPk(id)
      .then(team => res.send(team))
      .catch(err => next(err))
  })

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

router.put(
  '/team',
  (req, res, next) => {
    const id = req.params.id

    Team
      .findByPk(id)
      .then(team =>
        team.update(req.body))
      .then(updatedTeam => send(updatedTeam))
      .catch(err => next(err))
  })

module.exports = router