require("dotenv").config();
const { Router } = require("express");
const serverCountry = Router();

//JSON
const datos = require("../json/datos.json");

//FUNCION BD
const finAllCountry = require("../controllers/findAllCountry");
const createAcountry = require("../controllers/createCountry");

serverCountry.get("/countries", async (req, res) => {
  try {
    const findAllCountry = await finAllCountry(datos);
    return res.status(200).json(findAllCountry);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

serverCountry.post("/countries", async (req, res) => {
  try {
    return res.status(200).json("En desarrollo");
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = serverCountry;
