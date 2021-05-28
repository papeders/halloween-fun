'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Pachel Pederson",
        username: "pachelp",
        password: "pachel123"
    },
    {
        name: "Brandon Marino",
        username: "brandonm",
        password: "brandon123"
    },
    {
        name: "Ironhide Arcee",
        username: "ironhidea",
        password: "ironhide123"
    },
    {
        name: "Phlecia Angerman",
        username: "phleciaa",
        password: "phlecia123"
    },
    {
        name: "Rulin Pederson",
        username: "rulinp",
        password: "rulin123"
    }
], {})
  },

  down: async (queryInterface, Sequelize) => {

  }
};
