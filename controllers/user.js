const { default: fastify } = require('fastify')
const { Sequelize } = require('sequelize')
const { hashSync, compareSync } = require('bcrypt')
const sanitizer = require('sanitizer')

const db = require('../models')

const responseUser = {
  message: 'User has been registered'
}

const getUsers = (req, res, next) => {
  db.User.findAll({
    attributes: ["id", "email", "firstname", "lastname", "avatar", "admin"]
  })
    .then((users) => res.send(users))
    .catch((error) => res.send(error), db.User.sync())
}

const getUser = (req, res, next) => {
  db.User.findOne({where: {id: req.params.id},
    attributes: ["id", "email", "firstname", "lastname", "avatar", "admin"]
  })
    .then((user) => res.send(user))
    .catch(error => res.send(error), db.User.sync())
}

const signup = (req, res, next) => {
  const saltRounds = 10
  const hash = hashSync(req.body.password, saltRounds)
  const user = new db.User({
    email: req.body.email,
    firstname: sanitizer.escape(req.body.firstname),
    lastname: sanitizer.escape(req.body.lastname),
    password: hash
  })
  user.save()
    .then(() => res.send('User has been registered'))
    .catch(error => res.send(error))
}

const signin = (req, res, next) => {
  db.User.findOne({where: {email: req.body.email}})
    .then((user) => {
      if (!user) return res.code(401).send({message: 'User not found'})
      if(!compareSync(req.body.password, user.password)) return res.code(401).send({message: 'Password invalid'})
      res.send(user)
    })
    .catch(error => res.send(error))
}

module.exports = {
  getUsers,
  getUser,
  signup,
  signin
}
