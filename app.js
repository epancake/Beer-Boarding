const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors({origin: true}));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries.list("questions")
    .then(questions =>
      queries.list("solvers")
        .then(solvers => 
          queries.list("questions_solvers")
            .then(questions_solvers =>
              response.json({
                questions: questions,
                solvers: solvers,
                questions_solvers: questions_solvers,
              })  
            )
        )
    )
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/questions", (request, response) => {
  queries.list("questions")
    .then(questions => {
      response.json({ questions });
    })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/solvers", (request, response) => {
  queries.list("solvers")
    .then(solvers => {
      response.json({ solvers });
    })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/solvedby/:id", (request, response) => {
  queries.solvedby(request.params.id)
    .then(solvers => {
      response.json({ solvers });
    })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/questions/:id", (request, response) => {
  queries.solvedby(request.params.id)
    .then(questions => {
      response.json({ questions });
    })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/questions_solvers", (request, response) => {
  queries.list("questions_solvers")
    .then(questions_solvers => {
      response.json({ questions_solvers });
    })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/solvedby/:id", (request, response) => {
  queries.read(request.params.id).then(question => {
    question
      ? response.json({question})
      : response.sendStatus(404);
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/solvers/:id", (request, response) => {
  queries.read("solvers", request.params.id).then(solver => {
    solver
      ? response.json({solver})
      : response.sendStatus(404);
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.get("/questions_solvers/:id", (request, response) => {
  queries.read("questions_solvers", request.params.id).then(questions_solvers => {
    question_solver
      ? response.json({question_solver})
      : response.sendStatus(404);
  })
    .catch(err => response.status(500).send({message: err.message}));
});


app.post("/questions", (request, response) => {
  queries.create("questions", request.body).then(questions => {
    response.status(201).json({questions});
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.post("/solvers", (request, response) => {
  queries.create("solvers", request.body).then(solvers => {
    response.status(201).json({solvers});
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.post("/questions_solvers", (request, response) => {
  queries.create("questions_solvers", request.body).then(questions_solvers => {
    response.status(201).json({questions_solvers});
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.delete("/questions/:id", (request, response) => {
  queries.delete("questions", request.params.id).then(() => {
    response.sendStatus(204);
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.delete("/solvers/:id", (request, response) => {
  queries.delete("solvers", request.params.id).then(() => {
    response.sendStatus(204);
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.delete("/questions_solvers/:id", (request, response) => {
  queries.delete("questions_solvers", request.params.id).then(() => {
    response.sendStatus(204);
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.put("/questions/:id", (request, response) => {
  queries.update("questions", request.params.id, request.body).then(question => {
    response.json({question});
  })
    .catch(err => response.status(500).send({message: err.message}));
});

app.use((request, response) => {
  response.sendStatus(404);
});

module.exports = app;
