const sequelize = require('sequelize')
const db = require('../db.js')

const Team = db.define(
  'team',
  {
    team_name: {
      type: sequelize.STRING
    }
  },
  { tableName: 'football_teams' }
)

module.exports = Team
