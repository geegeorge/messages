exports.up = function(knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments();
    table.varchar('name').notNullable();
    table.varchar('message').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages');
};
