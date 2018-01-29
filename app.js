const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
    queries.list("questions")
      .then(questions =>
        queries.list("solvers").then(solvers => queries.list("questions_solvers").then(questions_solvers =>
        response.json({
          questions: questions,
          solvers: solvers,
          questions_solvers: questions_solvers
        })
      ))
      )
    .catch(console.error)
});

app.get("/questions", (request, response) => {
  queries.list("questions")
  .then(questions => {
    response.json({ questions });
  })
  .catch(console.error);
});

app.get("/solvers", (request, response) => {
  queries.list("solvers")
  .then(solvers => {
    response.json({ solvers });
  })
  .catch(console.error);
});

app.get("/solvedby", (request, response) => {
  queries.solvedby(1)
  .then(solvers => {
    response.json({ solvers });
  })
  .catch(console.error);
});

app.get("/questions_solvers", (request, response) => {
  queries.list("questions_solvers")
  .then(questions_solvers => {
    response.json({ questions_solvers });
  })
  .catch(console.error);
});

app.get("/questions/:id", (request, response) => {
    queries.read("questions", request.params.id).then(question => {
        question
            ? response.json({question})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.get("/solvers/:id", (request, response) => {
    queries.read("solvers", request.params.id).then(solvers => {
        solver
            ? response.json({solver})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.get("/questions_solvers/:id", (request, response) => {
    queries.read("questions_solvers", request.params.id).then(questions_solvers => {
        question_solver
            ? response.json({question_solver})
            : response.sendStatus(404)
    }).catch(console.error);
});


app.post("/questions", (request, response) => {
    queries.create("questions", request.body).then(question => {
        response.status(201).json({questions});
    }).catch(console.error);
});

app.post("/solvers", (request, response) => {
    queries.create("solvers", request.body).then(solvers => {
        response.status(201).json({solvers});
    }).catch(console.error);
});

app.post("/questions_solvers", (request, response) => {
    queries.create("questions_solvers", request.body).then(questions_solvers => {
        response.status(201).json({questions_solvers});
    }).catch(console.error);
});

app.delete("/questions/:id", (request, response) => {
    queries.delete("questions", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/questions/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(question => {
        response.json({question});
    }).catch(console.error);
});


app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;
