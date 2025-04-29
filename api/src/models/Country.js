const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      /* allowNull: false, */
    },
    name: {
      type: DataTypes.STRING,
    },
    Flagimage: {
      //imagen de la bandera(Flagimage)
      type: DataTypes.STRING,
    },
    continent: {
      //continente
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    poblacion: {
      type: DataTypes.STRING,
    },
  });
};
