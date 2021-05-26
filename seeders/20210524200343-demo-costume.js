'use strict';

const { urlencoded } = require("body-parser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Costumes', [
      {
          costumeName: "Pennywise & Georgie",
          img: "https://res.cloudinary.com/dqutmt6jn/image/upload/v1622064044/Halloween_e2t7li.jpg",
          description: "IT",
          userId: 1
      },
      {
        costumeName: "Harry Potter",
        img: "https://res.cloudinary.com/dqutmt6jn/image/upload/v1622064279/Ironhide_q52q29.jpg",
        description: "Harry Potter 2020",
        userId: 3
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
