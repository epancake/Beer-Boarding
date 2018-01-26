
exports.seed = function(knex, Promise) {
  return knex('solvers').del()
    .then(function () {
      return knex('solvers').insert([
        { id: 1, solver_name: "Emily Pancake"},
        { id: 2, solver_name: "James Mann"},
        { id: 3, solver_name: "Bryan Long"}
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE solvers_id_seq RESTART WITH 4;");
    });
};
