'use strict';

const { urlencoded } = require("body-parser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Costumes', [
      {
          costumeName: "Pennywise & Georgie",
          img: "(/halloween-fun/Halloween.jpg)",
          description: "IT",
          userId: 1
      },
      {
        costumeName: "Regan",
        img: "(/halloween-fun/Halloween.jpg)",
        description: "IT2",
        userId: 2
    },
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
