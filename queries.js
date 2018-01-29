const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(table, id) {
    return database(table).select().where("id", id).first()
  },
  create(table, item) {
    return database(table)
      .insert(item)
      .returning("*")
      .then(record => record[0])
  },
  update(table, id, question) {
    return database(table).update(item)
      .where("id", id).returning("*").then(record => record[0])
  },
  delete(table, id) {
    return database(table).delete().where("id", id)
  },
  solvedby(questionID) {
    return database('solvers').join('questions_solvers', 'solvers.id', '=', 'questions_solvers.solvers_id')
    .join('questions', 'questions.id', '=', 'questions_solvers.questions_id')
    .select('solvers.solver_name')
    .where('questions.id', questionID)


    // select('solver_name').from('solvers')
    //   .join('questions_solvers')
    //   .on("solvers.id", 'questions_solvers.solvers_id')
    //   .join('questions').on('questions_solvers.questions_id', 'questions.id')
      // .where('questions.id', questionID)

// SELECT solver_name
// FROM solvers JOIN questions_solvers
// ON solvers.id=questions_solvers.solvers_id
// JOIN questions ON questions_solvers.questions_id=questions.id
// WHERE questions.id=3;

  }
};
