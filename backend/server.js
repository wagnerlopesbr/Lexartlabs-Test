require("dotenv").config();

const app = require("./app");
const port = process.env.POSTGRES_PORT || 8000;

app.get("/", (req, res) => {
  res.send(
    "Welcome to the LexArtLabs Test API! by: @wagnerlopesbr (LinkedIn/GitHub)"
  );
});

app.listen(port, () => console.log(`Server on port ${port}`));
