
exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions", table => {
    table.increments("id").primary();
    table.text("question_name");
    table.text("question");
    table.text("solution");
    table.text("submitter");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("questions");
};
