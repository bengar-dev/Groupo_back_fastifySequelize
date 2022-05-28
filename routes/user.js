const { getUsers, getUser, signup, signin } = require('../controllers/user')

const { Users, User, SignupUser, SigninUser } = require('../schema/User')

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

const SignupOpts = {
  schema: {
    response: {
      200: SignupUser
    },
  },
  handler: signup
}

const SigninOpts = {
  schema: {
    response: {
      200: SigninUser,
      401: {
        type: 'object',
        properties: {
          message: {type: 'string'}
        }
      }
    },
  },
  handler: signin
}

function userRoutes (fastify, options, done) {
  fastify.get('/api/user', getUsersOpts)
  fastify.get('/api/user/:id', getUserOpts)
  fastify.post('/api/user/signup', SignupOpts)
  fastify.post('/api/user/signin', SigninOpts)

  done()
}

module.exports = userRoutes
