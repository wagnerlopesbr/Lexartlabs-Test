const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CellPhone = sequelize.define(
    "CellPhone",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "cell_phone",
      timestamps: false,
    }
  );

  CellPhone.belongsTo(sequelize.models.Model, {
    foreignKey: "model_id",
    as: "model",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  CellPhone.belongsTo(sequelize.models.Brand, {
    foreignKey: "brand_id",
    as: "brand",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  return CellPhone;
};
