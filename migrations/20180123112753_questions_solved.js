
exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions_solvers", table => {
      table.increments("id").primary();
      table.integer("questions_id").references("questions.id");
      table.integer("solvers_id").references("solvers.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("questions_solvers");
};
