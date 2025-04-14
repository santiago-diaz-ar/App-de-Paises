require("dotenv").config();
const { Router } = require("express");
const serverCountry = Router();

//JSON
const datos = require("../json/datos.json");

//FUNCION BD
const {
  finAllCountry,
  idCountry,
  nameCountry,
} = require("./controllers/countriesControllers");

serverCountry.get("/", async (req, res) => {
  try {
    const findAllCountry = await finAllCountry(datos);
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

serverCountry.get("/", async (req, res) => {
  try {
    res.status(200).json("en desarrollo");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

serverCountry.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const nameResultCountry = nameCountry(name);
    res.status(200).json(nameResultCountry);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = serverCountry;
