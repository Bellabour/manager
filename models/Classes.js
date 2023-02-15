'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.hasMany(models.Students);
      models.Students.belongsTo(models.Classes)
    }
  }
  Class.init({
    Classname:  { type: DataTypes.STRING,  unique: 'compositeIndex' },
    Classdescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Class;
};