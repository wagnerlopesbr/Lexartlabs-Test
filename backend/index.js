require("dotenv").config();
const express = require("express");
const app = require("./app");

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(
    "Welcome to the LexartLabs Test API! by: @wagnerlopesbr (LinkedIn/GitHub)"
  );
});

app.listen(port, () => console.log(`Server on port ${port}`));
