require("dotenv").config();
const app = require("./app");
const port = process.env.POSTGRES_PORT || 8000;

app.listen(port, () => console.log(`Server on port ${port}`));
