const { Country } = require("../../db");

const finAllCountry = async (datos) => {
  const countriesInDB = await Country.findAll();
  if (countriesInDB.length > 0) {
    return countriesInDB;
  } else {
    const resultado = [];
    for (const pais of datos) {
      const newCountry = await Country.create({
        name: pais.name?.official || "no existe",
        Flagimage: pais?.flags?.svg || "no existe",
        continent:
          Array.isArray(pais?.continents) && pais.continents.length > 0
            ? pais.continents[0]
            : "no existe",
        capital:
          Array.isArray(pais?.capital) && pais.capital.length > 0
            ? pais.capital[0]
            : "no existe",
        subregion: pais.region || "no existe",
        area: pais.area || "no existe",
        poblacion: pais.population || "no existe",
      });
      resultado.push(newCountry);
    }
    return resultado;
  }
};

const idCountry = async (id) => {
  const dbCountries = await Country.findAll();
  for (const pais in dbCountries) {
    const resultSearch = [];
    if (id) {
      console.log(id);

      return "verdadero";
    } else {
      return "error";
    }
  }
  return resultSearch;
};

module.exports = { finAllCountry, idCountry };
