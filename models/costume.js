'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Costume extends Model {

  static associate(models) {
      Costume.belongsTo(models.User, { foreignKey: 'userId' })
    };
  };
  Costume.init({
    costumeName: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Costume',
  });
  return Costume;
};