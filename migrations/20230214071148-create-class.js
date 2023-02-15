'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports={
  async up(queryInterface,Sequelize) {
    await queryInterface.createTable('StudentCourses',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      course_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        addConstraint:`Courses`,
        references:{
          model:'Courses',
          key:'id',
          foreignkey:'course_id'
        }
      },
      student_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        addConstraint:'Students',
        references:{
          model:'Students',
          key:'id',
          as:'student_id'
        }
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
async down(queryInterface,Sequelize){
return queryInterface.dropTable('StudentCourses')}
}
