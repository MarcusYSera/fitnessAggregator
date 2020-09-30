const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const path = require("path");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: "GET,POST",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
