const cors = require("cors");
const express = require("express");
const globalRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use(globalRouter);

module.exports = app;
