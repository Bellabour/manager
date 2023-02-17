const db = require("../models");
const Classes = require("../models/Classes");
const Courses = require("../models/Courses");

//create  model
const Student = db.Students;
const Class = db.Classes;
const Course = db.Courses;

//main

//create Student
const addStudent = async (req, res) => {
  let info = {
    Studentname: req.body.Studentname,
    age: req.body.age,
  };
  const student = await Student.create(info);
  res.status(200).send(student);
  console.log(student);
};

//get all students
const getAllStudents = async (req, res) => {
  let students = await Student.findAll({
    attributes: ["id", "Studentname", "age"],
  });
  res.status(200).send(students);
};
//get one student
const getOneStudent = async (req, res) => {
  let id = req.params.id;
  let student = await Student.findOne({
    where: { id: id },
    attributes: ["Studentname", "age"],
  });
  res.status(200).send(student);
};
//update one student
const updateStudent = async (req, res) => {
  let id = req.params.id;
  const student = await Student.update(req.body, { where: { id: id } });
  res.status(200).send(student);
};
//delete student by id
const deleteStudent = async (req, res) => {
  let id = req.params.id;
  await Student.destroy({ where: { id: id } });

  res.status(200).send("Student deleted successfully!!!");
};
//get all student detailed information
const getDetailedStudents = async (req, res) => {
  let id = req.params.id;
  let student = await Student.findAll({
    where: { id: id },
    include: [{model:Course,attributes:['Coursename']}, Class],
  });
  res.status(200).send(student);
};
//add course by student id
const Addcourse=async (req,res)=>{
    let std = await Student.findByPk(req.params.id,{})
    let info = {
        Coursename: req.body.Coursename,
      };
    const crs=await Course.findOne({where:info})
    await std.addCourse(crs);
    res.status(200).send('Course added succesfully')
}
//add and update student class by class id
const AddClass=async (req,res)=>{
    let cls = await Class.findByPk(req.params.id,{})
    let info = {
        Studentname: req.body.Studentname,
      };
    const std=await Student.findOne({where:info})
    await cls.addStudent(std);
    res.status(200).send('Class added succesfully')
}

//remove course by student id
const Removecourse=async (req,res)=>{
    let std = await Student.findByPk(req.params.id,{})
    let info = {
        Coursename: req.body.Coursename,
      };
    const crs=await Course.findOne({where:info})
    await std.removeCourse(crs);
    res.status(200).send('Course removed succesfully')
}
//remove class from student by class id and student name
const Removefromclass=async (req,res)=>{
    let cls = await Class.findByPk(req.params.id,{})
    let info = {
        Studentname: req.body.Studentname,
      };
    const std=await Student.findOne({where:info})
    await cls.removeStudent(std);
    res.status(200).send('Class removed succesfully')
}

//count student course by id
const Countcourses = async (req, res) => {
    let std = await Student.findByPk(req.params.id,{include: Course})
    
    let courseCount = await std.Courses.length;
    
    res.status(200).send('Courses:'+courseCount);
  };
module.exports = {
  addStudent,
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
  getDetailedStudents,
  Addcourse,
  AddClass,
  Removecourse,
  Removefromclass,
  Countcourses,
};
