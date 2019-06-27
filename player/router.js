const { Router } = require('express')
const Player = require('./playerModel')
const Team = require('..team/model')

const router = new Router()


router.get(
  '/player',
  (req, res, next) =>
    Player
      .findAll()
      .then(players => res.send(players))
      .catch(err => next(err))
)


router.get(
  '/player/:id',
  (req, res, next) => {
    const id = req.params.id

    Player
      .findByPk(id)
      .then(player => res.send(player))
      .catch(err => next(err))
  })

router.post('/player', (req, res) => {
  Player
    .create(req.body)
    .then(newPlayer => res.status(200).send(newPlayer))
    .catch(err => res.status(500).send(err))
})

router.put(
  '/player',
  (req, res, next) => {
    const id = req.params.id

    Player
      .findByPk(id, { iclude: [Team] })
      .then(player =>
        player.update(req.body))
      .then(updatedPlayer => send(updatedPlayer))
      .catch(err => next(err))
  })

module.exports = router