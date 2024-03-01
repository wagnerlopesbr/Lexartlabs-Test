"use strict";

/** @type {import('sequelize-cli').Migration} */

const cellPhone = require("../models/cellphone");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cell_phone", [
      {
        model_id: 1,
        brand_id: 1,
        price: 10000,
        color: "Black",
      },
      {
        model_id: 1,
        brand_id: 1,
        price: 10000,
        color: "White",
      },
      {
        model_id: 1,
        brand_id: 1,
        price: 9500,
        color: "Red",
      },
      {
        model_id: 2,
        brand_id: 1,
        price: 8000,
        color: "White",
      },
      {
        model_id: 2,
        brand_id: 1,
        price: 8000,
        color: "Black",
      },
      {
        model_id: 3,
        brand_id: 2,
        price: 3700,
        color: "White",
      },
      {
        model_id: 3,
        brand_id: 2,
        price: 3700,
        color: "Black",
      },
      {
        model_id: 3,
        brand_id: 2,
        price: 3700,
        color: "Blue",
      },
      {
        model_id: 4,
        brand_id: 2,
        price: 2500,
        color: "Black",
      },
      {
        model_id: 4,
        brand_id: 2,
        price: 2500,
        color: "White",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cell_phone", null, {});
  },
};
