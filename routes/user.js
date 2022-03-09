const { getUsers } = require('../controllers/user')

const User = require('../schema/User.js')

const getUsersOpts = {
  schema: {
    response: {
      200: User
    },
  },
  handler: getUsers
}

function userRoutes (fastify, options, done) {
  fastify.get('/api/user', getUsersOpts)

  done()
}

module.exports = userRoutes
