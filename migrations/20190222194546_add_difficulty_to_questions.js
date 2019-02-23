exports.up = function(knex, Promise) {
    return knex.schema.table('questions', function(t) {
        t.text('difficulty').defaultTo('Not Rated');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('questions', function(t) {
        t.dropColumn('difficulty');
    });
};