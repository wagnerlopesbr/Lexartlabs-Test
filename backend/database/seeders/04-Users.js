"use strict";

/** @type {import('sequelize-cli').Migration} */

const users = require("../models/users");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        email: "user1@email.com",
        password: "password1",
      },
      {
        email: "user2@email.com",
        password: "password2",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
