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
  if (req.body.Studentname == "") {
    return res.status(422).json({ message: "Studentname cannot be empty" });
  } else if (!req.body.Studentname) {
    return res
      .status(412)
      .json({ message: "Studentname should be spelt correctly" });
  }
  let info = {
    Studentname: req.body.Studentname,
    age: req.body.age,
  };
  if (info)
    try {
      await Student.create(info);
      res.status(200).json({ message: "student added successfully!" });
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.errors[0].message || "we just got an error" });
    }
};

//get all students
const getAllStudents = async (req, res) => {
  let students = await Student.findAll({
    attributes: ["id", "Studentname", "age"],
  });
  if (!students) {
    return { message: "no students found" };
  }
  res.status(200).send(students);
};
//update one student
const updateStudent = async (req, res) => {
  let id = req.params.id;
  const student = await Student.update(req.body, { where: { id: id } });
  res.status(200).send(student) || "we just got an error";
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
  let student = await Student.findOne({
    where: { id: id },
    include: [{ model: Course, attributes: ["Coursename"] }, Class],
  });
  if (student) {
    return res.status(200).send(student);
  } else
    res
      .status(400)
      .send(
        { message: "student with that id does not exist" } ||
          "we just got an error"
      );
};
//add course by student id
const Addcourse = async (req, res) => {
  if (req.body.Coursename == "") {
    return res.status(422).json({ message: "Coursename cannot be empty" });
  } else if (!req.body.Coursename) {
    return res
      .status(412)
      .json({ message: "Coursename should be spelt correctly" });
  }
  try {
    let std = await Student.findByPk(req.params.id, {});
    let info = {
      Coursename: req.body.Coursename,
    };
    let crs = await Course.findOne({ where: info });
    if (crs) {
    } else
      return res.status(400).send({ message: "course could not be found" });
    await std.addCourse(crs);
    return res.status(200).send("Course added succesfully");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//add and update student class by class id
const AddClass = async (req, res) => {
  let cls = await Class.findByPk(req.params.id, {});
  let info = {
    Studentname: req.body.Studentname,
  };
  const std = await Student.findOne({ where: info });
  await cls.addStudent(std);
  res.status(200).send("Class added succesfully");
};

//remove course by student id
const Removecourse = async (req, res) => {
  let std = await Student.findByPk(req.params.id, {});
  let info = {
    Coursename: req.body.Coursename,
  };
  const crs = await Course.findOne({ where: info });
  await std.removeCourse(crs);
  res.status(200).send("Course removed succesfully");
};
//remove class from student by class id and student name
const Removefromclass = async (req, res) => {
  let cls = await Class.findByPk(req.params.id, {});
  let info = {
    Studentname: req.body.Studentname,
  };
  const std = await Student.findOne({ where: info });
  await cls.removeStudent(std);
  res.status(200).send("Class removed succesfully");
};

//count student course by id
const Countcourses = async (req, res) => {
  let std = await Student.findByPk(req.params.id, { include: Course });

  let courseCount = await std.Courses.length;

  res.status(200).send("Courses:" + courseCount);
};
module.exports = {
  addStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  getDetailedStudents,
  Addcourse,
  AddClass,
  Removecourse,
  Removefromclass,
  Countcourses,
};
