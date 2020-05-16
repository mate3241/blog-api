
exports.seed = function (knex) {
  return knex('posts').insert([
    {
      title: 'On programming',
      content: 'I love programming',
      userId: 1
    },
    {
      title: 'On devops',
      content: 'I hate devops',
      userId: 3
    },
    {
      title: 'My camera',
      content: 'I love my camera',
      userId: 2
    }
  ]);
};
