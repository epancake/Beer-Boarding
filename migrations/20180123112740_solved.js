
exports.up = function(knex, Promise) {
  return knex.schema.createTable("solvers", table => {
    table.increments("id").primary();
    table.text("solver_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("solvers")
};
