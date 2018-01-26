const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/questions", (request, response) => {
    queries.listqs().then(questions => {
        response.json({questions});
    }).catch(console.error);
});

app.get("/questions/:id", (request, response) => {
    queries.readqs(request.params.id).then(question => {
        question
            ? response.json({question})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/questions", (request, response) => {
    queries.createqs(request.body).then(question => {
        response.status(201).json({questions});
    }).catch(console.error);
});

app.delete("/questions/:id", (request, response) => {
    queries.deleteqs(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/questions/:id", (request, response) => {
    queries.updateqs(request.params.id, request.body).then(question => {
        response.json({question});
    }).catch(console.error);
});

app.get("/solvers", (request, response) => {
    queries.listSolvers().then(solvers => {
        response.json({solvers});
    }).catch(console.error);
});

app.get("/solvers/:id", (request, response) => {
    queries.readSolvers(request.params.id).then(question => {
        question
            ? response.json({question})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/solvers", (request, response) => {
    queries.createSolvers(request.body).then(question => {
        response.status(201).json({question});
    }).catch(console.error);
});

app.delete("/solvers/:id", (request, response) => {
    queries.deleteSolvers(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/solvers/:id", (request, response) => {
    queries.updateSolvers(request.params.id, request.body).then(question => {
        response.json({solver});
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
