
exports.up = function(knex, Promise) {
  return knex.schema.createTable("difficulty", table => {
    table.increments("id").primary();
    table.integer("questions_id").references("questions.id");
    table.integer("difficulty");
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("difficulty");
};
