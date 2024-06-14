require("dotenv").config();
const { Router } = require("express");

const countriesRouter = Router();

countriesRouter.get("/", async (req, res) => {
  try {
    return res.status(200).json({ funcionando: "positivo" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = countriesRouter;
