const { Activity } = require("../../db");

const activitiesAll = () => {
  return true;
};

const activityPost = async ({
  name,
  dificultad,
  duracion,
  temporada,
  pais,
}) => {
  const Creacion = await Activity.create({
    name,
    dificultad,
    duracion,
    temporada,
  });

  Creacion.addCountries(pais);
  return Creacion;
};

module.exports = {
  activitiesAll,
  activityPost,
};
