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
        name: "iPhone 12",
      },
      {
        name: "iPhone 11",
      },
      {
        name: "iPhone XR",
      },
      {
        name: "iPhone XS",
      },
      {
        name: "Mi 11",
      },
      {
        name: "Redmi Note 10",
      },
      {
        name: "Mi 11 Pro",
      },
      {
        name: "Redmi Note 9",
      },
      {
        name: "Galaxy S21",
      },
      {
        name: "Galaxy S20",
      },
      {
        name: "Galaxy S10",
      },
      {
        name: "Galaxy Note 20",
      },
      {
        name: "Galaxy Note 10",
      },
      {
        name: "Galaxy A72",
      },
      {
        name: "Galaxy A52",
      },
      {
        name: "Galaxy A32",
      },
      {
        name: "Galaxy M31",
      },
      {
        name: "Galaxy M21",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("model", null, {});
  },
};
