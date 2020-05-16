
exports.seed = function (knex) {
  return knex('comments').insert([
    {
      content: 'sick post bro',
      userId: 3,
      postId: 2
    },
    {
      content: 'you dumb',
      userId: 2,
      postId: 3
    },
    {
      content: 'whatews',
      userId: 1,
      postId: 3
    }
  ]);
};
