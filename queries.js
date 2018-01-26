const database = require("./database-connection");

module.exports = {
  listqs() {
    return database("questions").select();
  },
  readqs(id) {
    return database('questions').select().where("id", id).first()
  },
  createqs(question) {
    return database('questions')
      .insert(question)
      .returning("*")
      .then(record => record[0])
  },
  updateqs(id, question) {
    return database('questions').update(question)
      .where("id", id).returning("*").then(record => record[0])
  },
  deleteqs(id) {
    return database('questions').delete().where("id", id)
  },
  listSolvers() {
    return database("solvers").select();
  },
  readSolvers(id) {
    return database('solvers').select().where("id", id).first()
  },
  createSolvers(game) {
    return database('solvers')
      .insert(game)
      .returning("*")
      .then(record => record[0])
  },
  updateSolvers(id, solver) {
    return database('solvers').update(solver)
      .where("id", id).returning("*").then(record => record[0])
  },
  deleteSolvers(id) {
    return database('solvers').delete().where("id", id)
  }
};
