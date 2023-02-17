const db = require("../models");
const Classes = require("../models/Classes");
const Courses = require("../models/Courses");

//create  model
const Student = db.Students;
const Class = db.Classes;
const Course = db.Courses;

//create course
const addCOurse = async (req, res) => {
  let info = {
    COursename: req.body.Coursename,
    Coursedescription: req.body.Coursedescription,
  };
  const course = await Course.create(info);
  res.status(200).send(course);
  console.log(course);
};
//get all courses
const getAllCourses = async (req, res) => {
  let course = await Course.findAll({
    attributes: ["id", "Coursename", "Coursedescription"],
  });
  res.status(200).send(course);
};
//get one course
const getOneCourse = async (req, res) => {
  let id = req.params.id;
  let course = await Course.findOne({
    where: { id: id },
    attributes: ["Coursename", "Coursedescription"],
    include: [
      {
        model: Student,
        attributes: ["id","Studentname", "age"],
      },
    ],
  });
  res.status(200).send(course);
};
//update one course
const updateCourse = async (req, res) => {
    let id = req.params.id;
    const course = await Course.update(req.body, { where: { id: id } });
    res.status(200).send(course);
  };
  //delete course by id
const deleteCourse = async (req, res) => {
    let id = req.params.id;
    await Course.destroy({ where: { id: id } });
  
    res.status(200).send("Course deleted successfully!!!");
  };
  //get all courses detailed information


  module.exports={
    addCOurse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getOneCourse
  }