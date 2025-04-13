const { Country } = require("../../db");

const finAllCountry = async (datos) => {
  const countriesInDB = await Country.findAll();
  if (countriesInDB.length > 0) {
    return countriesInDB;
  } else {
    const resultado = [];
    for (const pais of datos) {
      const newCountry = await Country.create({
        name: pais.name?.official,
        Flagimage: pais.flags?.svg,
        continent: pais?.continents,
        capital: pais?.capital,
        subregion: pais.region,
        area: pais.area,
        poblacion: pais.population,
      });
      resultado.push(newCountry);
    }
    return resultado;
  }
};

const idCountry = async (id) => {
  const resultSearch = [];
  return resultSearch;
};

module.exports = { finAllCountry, idCountry };
