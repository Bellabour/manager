'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Student.belongsToMany(models.Courses,{
          through:'StudentCourses',
          foreignKey:"Student_id"
        });
        models.Courses.belongsToMany(models.Students,{
          through:'StudentCourses',
          foreignKey:"course_id"
        });
    }
    
  }
  Student.init({
    Studentname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    ClassId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Students',
  });
  return Student;
};