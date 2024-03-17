"use strict";

/** @type {import('sequelize-cli').Migration} */

const cellPhone = require("../models/cellphone");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cell_phone", [
      { model_id: 145, brand_id: 24, price: 5000, color: "Black" },
      { model_id: 145, brand_id: 24, price: 5000, color: "White" },
      { model_id: 146, brand_id: 24, price: 5000, color: "Black" },
      { model_id: 146, brand_id: 24, price: 5000, color: "White" },
      { model_id: 147, brand_id: 24, price: 5000, color: "Black" },
      { model_id: 147, brand_id: 24, price: 5000, color: "White" },
      { model_id: 148, brand_id: 24, price: 5000, color: "Black" },
      { model_id: 148, brand_id: 24, price: 5000, color: "White" },
      { model_id: 149, brand_id: 24, price: 5000, color: "Black" },
      { model_id: 149, brand_id: 24, price: 5000, color: "White" },
      { model_id: 150, brand_id: 24, price: 5000, color: "Black" },
      { model_id: 150, brand_id: 24, price: 5000, color: "White" },
      { model_id: 151, brand_id: 25, price: 3000, color: "Black" },
      { model_id: 151, brand_id: 25, price: 3000, color: "White" },
      { model_id: 152, brand_id: 25, price: 3000, color: "Black" },
      { model_id: 152, brand_id: 25, price: 3000, color: "White" },
      { model_id: 153, brand_id: 25, price: 3000, color: "Black" },
      { model_id: 153, brand_id: 25, price: 3000, color: "White" },
      { model_id: 154, brand_id: 25, price: 3000, color: "Black" },
      { model_id: 154, brand_id: 25, price: 3000, color: "White" },
      { model_id: 155, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 155, brand_id: 26, price: 4000, color: "White" },
      { model_id: 156, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 156, brand_id: 26, price: 4000, color: "White" },
      { model_id: 157, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 157, brand_id: 26, price: 4000, color: "White" },
      { model_id: 158, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 158, brand_id: 26, price: 4000, color: "White" },
      { model_id: 159, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 159, brand_id: 26, price: 4000, color: "White" },
      { model_id: 160, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 160, brand_id: 26, price: 4000, color: "White" },
      { model_id: 161, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 161, brand_id: 26, price: 4000, color: "White" },
      { model_id: 162, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 162, brand_id: 26, price: 4000, color: "White" },
      { model_id: 163, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 163, brand_id: 26, price: 4000, color: "White" },
      { model_id: 164, brand_id: 26, price: 4000, color: "Black" },
      { model_id: 164, brand_id: 26, price: 4000, color: "White" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cell_phone", null, {});
  },
};
