const { Activity, Country } = require("../../db");

const activitiesAll = () => {
  return true;
};

const activityPost = async (name, dificultad, duracion, temporada) => {
  const Creacion = await Activity.Create({
    name: name,
    dificultad: dificultad,
    duracion: duracion,
    temporada: temporada,
  });

  if (Creacion) {
    return "se a creado la actividad en el pais de forma correcta";
  } else {
    return "no se a creado de forma correcta la actividad";
  }
};

module.exports = {
  activitiesAll,
  activityPost,
};
