// require("dotenv").config();
// const express = require("express");
// const app = require("./app");

// const port = process.env.POSTGRES_PORT || 8000;

// app.get("/", (req, res) => {
//   res.send(
//     "Welcome to the LexartLabs Test API! by: @wagnerlopesbr (LinkedIn/GitHub)"
//   );
// });

// app.listen(port, () => console.log(`Server on port ${port}`));

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Welcome to the LexartLabs Test API! by: @wagnerlopesbr (LinkedIn/GitHub)"
  );
});

app.listen(8000, () => console.log(`Server on port 8000`));

module.exports = app;
