const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Model = sequelize.define(
    "Model",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "model",
      timestamps: false,
    }
  );

  return Model;
};
