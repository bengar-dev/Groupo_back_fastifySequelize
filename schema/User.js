const Users = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      email: { type: 'string' },
      password: { type: 'string' },
      firstname: { type: 'string'},
      lastname: {type: 'string'},
      avatar: {type: 'string'},
      admin: {type: 'number'}
    }
  }
}

const User = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    email: { type: 'string' },
    password: { type: 'string' },
    firstname: { type: 'string'},
    lastname: {type: 'string'},
    avatar: {type: 'string'},
    admin: {type: 'number'}
  }
}

const SignupUser = {
  type: 'object',
  properties: {
    email: {type: 'string'},
    firstname: {type: 'string'},
    lastname: {type: 'string'},
    password: {type: 'string'}
  }
}

const SigninUser = {
  type: 'object',
  properties: {
    id: {type: 'number'},
    email: {type: 'string'}
  }
}

module.exports = { Users, User, SignupUser, SigninUser }