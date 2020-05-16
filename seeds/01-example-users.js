const bcrypt = require('bcrypt');
exports.seed = (knex) => {
  return knex('users').insert([
    {
      userName: 'user1',
      email: 'email@example.com',
      passwordHash: bcrypt.hashSync('abc123', 10)
    },
    {
      userName: 'user2',
      email: 'user2@example.com',
      passwordHash: bcrypt.hashSync('password', 10)
    }, {
      userName: 'user3',
      email: 'dude@yahoo.com',
      passwordHash: bcrypt.hashSync('aaa', 10)
    }
  ]);
};
