const { Activity, Country } = require("../../db");

const activitiesAll = () => {
  return true;
};

const activityPost = async (name, dificultad, duracion, temporada) => {
  console.log(name, dificultad, duracion, temporada);

  const Creacion = await Activity.Create({
    name: name,
    dificultad: dificultad,
    duracion: duracion,
    temporada: temporada,
  });

  return true;
};

module.exports = {
  activitiesAll,
  activityPost,
};
