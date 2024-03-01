const { Router } = require("express");
const express = require("express");
// importar routers para globalRouter.use(routers)
const loginRouter = require("./login");
const usersRouter = require("./users");
const productsRouter = require("./products");
const brandRouter = require("./brand");
const modelRouter = require("./model");

const globalRouter = Router();

globalRouter.use(express.json());
// globalRouter.use(routers) aqui
globalRouter.use("/login", loginRouter);
globalRouter.use("/users", usersRouter);
globalRouter.use("/products", productsRouter);
globalRouter.use("/brand", brandRouter);
globalRouter.use("/model", modelRouter);

module.exports = globalRouter;
