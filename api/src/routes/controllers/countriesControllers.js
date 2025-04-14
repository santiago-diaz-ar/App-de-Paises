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
  const dbCountries = await Country.findAll();
  try {
    const resultId = [];
    for (const pais of dbCountries) {
      if (pais.id == id) {
        resultId.push(pais);
      }
    }
    return resultId;
  } catch (error) {
    return error.message;
  }
};

const nameCountry = async (name) => {
  try {
    console.log(name);

    return name;
  } catch (error) {
    return error.message;
  }
};

module.exports = { finAllCountry, idCountry, nameCountry };
