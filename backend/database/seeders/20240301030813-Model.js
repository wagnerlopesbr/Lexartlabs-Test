"use strict";

/** @type {import('sequelize-cli').Migration} */

const model = require("../models/model");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("model", [
      {
        name: "iPhone 13 Pro",
      },
      {
        name: "iPhone SE",
      },
      {
        name: "Mi 11",
      },
      {
        name: "Redmi Note 10",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("model", null, {});
  },
};
