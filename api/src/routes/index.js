const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countRoutes = require("./countries");

const router = Router();

router.use(express.json());
router.use(morgan("dev"));
router.use(cors());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", countRoutes);

module.exports = router;
