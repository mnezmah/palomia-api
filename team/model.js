const sequelize = require('sequelize')
const db = require ('..db')

const Team = db.define('team', {name:sequelize.STRING})

module.exports = model