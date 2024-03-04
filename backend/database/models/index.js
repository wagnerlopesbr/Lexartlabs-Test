const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const envConfigs = require("../config/config.js");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = envConfigs[env];
const db = {};

let sequelize;
if (config && config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
      db
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
