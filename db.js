const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
// const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'

const sequelize = new Sequelize(databaseUrl)

sequelize
  .sync()
  .then(() => conslole.log('db connected'))
  .catch(() => console.error )

  module.exports = sequelize