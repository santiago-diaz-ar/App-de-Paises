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
      });
      createdCountries.push(newCountry);
    }
    return createdCountries;
  }
};
module.exports = finAllCountry;
