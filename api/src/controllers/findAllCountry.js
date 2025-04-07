const { Country } = require("../db");

const finAllCountry = async (datos) => {
  const countriesInDB = await Country.findAll();
  if (countriesInDB.length > 0) {
    /* return console.log("hola"); */
    return countriesInDB;
  } else {
    const createdCountries = [];
    for (const pais of datos) {
      try {
        const newCountry = await Country.create({
          name: pais.name?.official, // Intenta acceder al nombre oficial
        });
        createdCountries.push(newCountry);
      } catch (error) {
        console.error(
          `Error al crear el país "${pais.name?.official}":`,
          error
        );
      }
    }
    console.log(
      `${createdCountries.length} países creados y guardados exitosamente.`
    );
    return createdCountries;
  }
};

module.exports = finAllCountry;
