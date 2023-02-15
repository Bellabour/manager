'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        primaryKey:true,  
      },
      Studentname: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      age: {
        type: Sequelize.INTEGER
      },
      ClassId:{
        type:Sequelize.INTEGER,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};