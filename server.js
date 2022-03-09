const { Sequelize, DataTypes } = require('sequelize')
const mysql = require('mysql')
dotenv = require('dotenv').config();

const fastify = require('fastify')({logger: true})

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_MDP, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
})

fastify.register(require('./routes/user'))

const start = async() => {
  try {
    await fastify.listen(5000)
  } catch(error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()

const connect = async() => {
  try {
    sequelize.authenticate()
    console.log('Connected to MySQL database')
  } catch(error) {
    console.error('Unable to connect to the database :', error)
  }
}

connect()
