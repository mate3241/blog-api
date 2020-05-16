
exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('title');
    table.string('content');
    table.integer('userId').unsigned().references('users.id');
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
