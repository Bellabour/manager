'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('courses', {
   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    Coursename: {
      type: Sequelize.STRING,
      allowNull:false,
      unique:true
    },
    Coursedescription: {
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });

},
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('courses');
}
};
