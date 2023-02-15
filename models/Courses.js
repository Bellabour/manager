'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      };}
  Course.init({
    Coursename: DataTypes.STRING,
    Coursedescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Course;
};