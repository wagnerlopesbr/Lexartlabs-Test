const express = require("express");
const globalRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use(globalRouter);

module.exports = app;
