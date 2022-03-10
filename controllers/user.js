const { Sequelize } = require('sequelize')
const db = require('../models')

const getUsers = (req, res, next) => {
  db.User.findAll()
    .then((users) => res.send(users))
    .catch((error) => res.send(error), db.User.sync())
}

const getUser = (req, res, next) => {
  db.User.findOne({where: {id: req.params.id}})
    .then((user) => res.send(user))
    .catch(error => res.send(error), db.User.sync())
}

module.exports = {
  getUsers,
  getUser
}
