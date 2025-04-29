const { Activity } = require("../../db");

const activitiesAll = async () => {
  const Actividades = await Activity.findAll();
  return Actividades;
};

const activityPost = async (name, dificultad, duracion, temporada, pais) => {
  console.log(name, dificultad, duracion, temporada, pais);

  const Creacion = await Activity.create({
    name,
    dificultad,
    duracion,
    temporada,
  });

  /* Creacion.addCountries(pais); */
  return Creacion;
};

module.exports = {
  activitiesAll,
  activityPost,
};
