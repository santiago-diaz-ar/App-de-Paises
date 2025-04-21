require("dotenv").config();
const { Router } = require("express");
const serverActivity = Router();

const {
  activityPost,
  activitiesAll,
} = require("./controllers/activitiesControllers");

serverActivity.post("/", async (req, res) => {
  try {
    const { name, dificultad, duracion, temporada, pais } = req.body;
    const CreacionActivity = await activityPost(
      name,
      dificultad,
      duracion,
      temporada,
      pais
    );
    return res.status(200).json(CreacionActivity);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

serverActivity.get("/", (req, res) => {
  try {
    return res.status(200).json("sin iniciar");
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = serverActivity;
