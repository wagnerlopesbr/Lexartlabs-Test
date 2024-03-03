## Dependencies Used

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Sequelize: Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- Sequelize CLI: Command-line interface for Sequelize.
- Axios: Promise-based HTTP client for the browser and Node.js.
- Cors: Middleware for Express.js to enable CORS (Cross-Origin Resource Sharing).
- Dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.
- Jsonwebtoken: JSON Web Token implementation for Node.js.
- Pg: Non-blocking PostgreSQL client for Node.js.
- Pg-hstore: Module for serializing and deserializing JSON data to hstore format for PostgreSQL.

## Routes:

### /login

- **/login** -> connect the user depending on email and password

### /users

- **/users** -> read all users

- **/users/id (number)** -> find one user by ID

- **/users/insert** -> create a new user

### /products

- **/products** -> read all products

- **/products/brand (string)** -> search all by brand name (example: xiaomi, apple)

- **/products/insert** -> create a new product depending on existing brands and models IDs

- **/products/update/id** -> edit one existing product by ID

- **/products/delete/id** -> delete one existing product by ID

### /brand

- **/brand** -> read all brands

- **/brand/insert** -> create a new brand

- **/brand/update/id** -> edit one existing brand by ID

- **/brand/delete/id** -> delete one existing brand by ID

### /model

- **/model** -> read all models

- **/model/insert** -> create a new model

- **/model/update/id** -> edit one existing model by ID

- **/model/delete/id** -> delete one existing model by ID
