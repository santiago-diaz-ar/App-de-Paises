require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");

const countriesRouter = Router();

countriesRouter.get("/countries", async (req, res) => {
  try {
    const api = await axios.get("https://restcountries.com/v3.1/all");

    console.log(api);
    return res.status(200).json(api);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = countriesRouter;
