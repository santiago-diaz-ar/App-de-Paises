require("dotenv").config();
const { Router } = require("express");
const serverActivity = Router();

const {
  activityPost,
  activitiesAll,
} = require("./controllers/activitiesControllers");

serverActivity.post("/", (req, res) => {
  try {
    return res.status(200).json(true);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

serverActivity.get("/", (req, res) => {
  try {
    return res.status(200).json(true);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = serverActivity;
