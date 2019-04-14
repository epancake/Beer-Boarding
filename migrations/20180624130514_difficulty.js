
exports.up = function(knex, Promise) {
    return knex.schema.createTable("difficulty", table => {
        table.increments("id").primary();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("difficulty");
  };
  