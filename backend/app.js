const express = require("express");
const globalRouter = express.Router();
const app = express();

app.use(express.json());
app.use(globalRouter);

module.exports = app;
