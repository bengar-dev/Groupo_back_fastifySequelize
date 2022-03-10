const { getUsers, getUser } = require('../controllers/user')

const { Users, User } = require('../schema/User')

const getUsersOpts = {
  schema: {
    response: {
      200: Users
    },
  },
  handler: getUsers
}

const getUserOpts = {
  schema: {
    response: {
      200: User
    },
  },
  handler: getUser
}

function userRoutes (fastify, options, done) {
  fastify.get('/api/user', getUsersOpts)
  fastify.get('/api/user/:id', getUserOpts)

  done()
}

module.exports = userRoutes
