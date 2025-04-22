require("dotenv").config();
const { Router } = require("express");
const serverCountry = Router();

//JSON
const datos = require("../json/datos.json");

//FUNCIONES BD
const {
  finAllCountry,
  idCountry,
} = require("./controllers/countriesControllers");

serverCountry.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const findAllCountry = await finAllCountry({ datos, name });
    return res.status(200).json(findAllCountry);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

serverCountry.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await idCountry(id);
    res.status(200).json(pais);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = serverCountry;
