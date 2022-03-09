const User = {
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

module.exports = User
