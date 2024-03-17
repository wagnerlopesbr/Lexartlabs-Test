"use strict";

/** @type {import('sequelize-cli').Migration} */

const brand = require("../models/brand");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("brand", [
      {
        name: "Apple",
      },
      {
        name: "Xiaomi",
      },
      {
        name: "Samsung",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brand", null, {});
  },
};
