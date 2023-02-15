'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
queryInterface.addConstraint('Students',{
fields:['classid'],
type:'foreign key',
name:'class_student_association',
addConstraint:`students`,
references:{
  table:'classes',
  field:'id'
  
}
})
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Students','class_student_association')}
   }

