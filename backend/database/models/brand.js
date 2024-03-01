const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Brand = sequelize.define(
    "Brand",
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
      tableName: "brand",
      timestamps: false,
    }
  );

  return Brand;
};
