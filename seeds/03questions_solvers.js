
exports.seed = function(knex, Promise) {
  return knex('questions_solvers').del()
    .then(function () {
      return knex('questions_solvers').insert([
        { id: 1, questions_id: 1, solvers_id: 1},
        { id: 2, questions_id: 1, solvers_id: 2},
        { id: 3, questions_id: 3, solvers_id: 3}
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE questions_solvers_id_seq RESTART WITH 4;");
    });
};
