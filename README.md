# Lexartlabs-Test

# Routes:

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
