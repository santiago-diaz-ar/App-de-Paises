const { Country } = require("../db");

const finAllCountry = async (datos) => {
  const countriesInDB = await Country.findAll();
  if (countriesInDB.length > 0) {
    return countriesInDB;
  } else {
    const createdCountries = [];
    for (const pais of datos) {
      const newCountry = await Country.create({
        name: pais.name?.official || "no existe",
        Flagimage: pais?.flags?.svg || "no existe",
        continent: pais?.continents[0] || "no existe",
        capital: pais.capital[0] || "no existe",
        subregion: pais.region || "no existe",
        area: pais.area || "no existe",
        poblacion: pais.population || "no existe",
      });
      createdCountries.push(newCountry);
    }
    return createdCountries;
  }
};
module.exports = finAllCountry;
