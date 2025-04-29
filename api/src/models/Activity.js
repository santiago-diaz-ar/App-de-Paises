const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    dificultad: {
      type: DataTypes.STRING,
    },
    duracion: {
      type: DataTypes.STRING,
    },
    temporada: {
      type: DataTypes.STRING,
    },
    pais: {
      type: DataTypes.STRING,
    },
  });
};
