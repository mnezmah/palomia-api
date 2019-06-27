const sequelize = require('sequelize')
const db = require('../db.js')
const Team = require('../team/model')

const Player = db.define(
  'player',
  {
    player_name: {
      type: sequelize.STRING
    }
  },{
    number: {
    type: sequelize.INTEGER}
  },
  { tableName: 'players' }
)

Player.belongsTo(Team)

module.exports = Player
