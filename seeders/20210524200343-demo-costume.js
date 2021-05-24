'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Costumes', [
      {
          costumeName: "Pennywise & Georgie",
          img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/09/IT-Pennywise-Red-Balloon.jpg",
          description: "IT"
      },
      {   costumeName: "Regan",
          img: "C:/Users/oreb197/Pictures/Regan2018.jpg",
          description: "Exorcist",
  }
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
