
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments();
    table.string('title', 64);
    table.string('director', 64);
    table.float('rating', 2, 1);
    table.integer('year');
    table.string('poster_url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
