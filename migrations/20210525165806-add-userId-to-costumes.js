'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Costumes',
    'userId', {
      type: Sequelize.INTEGER
    });
      },

  down: async (queryInterface, Sequelize) => {

  }
};
