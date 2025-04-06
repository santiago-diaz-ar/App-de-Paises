const { Country } = require("../db");

const finAllCountry = async () => {
  const country = await Country.finAll();
  return country;
};

module.exports = finAllCountry;
