const { Router } = require("express");
const express = require("express");
// importar routers para globalRouter.use(routers)

const globalRouter = Router();

globalRouter.use(express.json());

// globalRouter.use(routers) aqui

module.exports = globalRouter;
