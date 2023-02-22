const db = require ("../models")
const Classes = require("../models/Classes")
const Courses = require("../models/Courses")

//create  model
const Student=db.Students
const Class=db.Classes
const Course=db.Courses

//create class
const addClass = async (req, res) => {
    let info = {
      Classname: req.body.Classname,
      Classdescription: req.body.Classdescription,
    };
    const cls = await Class.create(info);
    res.status(200).send(cls);
    console.log(cls);
  };
//get all classes
const getAllClasses = async (req, res) => {
    let cls = await Class.findAll({
      attributes: ["id", "Classname", "Classdescription"],
      include:[{model:Student,attributes:['id','Studentname']}]
    });
    res.status(200).send(cls);
  };
  //delete class by id
  const deleteClass = async (req, res) => {
    let id = req.params.id;
    await Class.destroy({ where: { id: id } });
  
    res.status(200).send("Class deleted successfully!!!");
  };




//count how many students in a class
const CountStudentsClass = async (req, res) => {
    let cls = await Class.findByPk(req.params.id,{include: Student}) 
    let studentCount = await cls.Students.length;
    res.status(200).send('Students:'+studentCount);
  };
  //get one class
const getOneClass = async (req, res) => {
    let id = req.params.id;
    let cls = await Class.findOne({
      where: { id: id },
      attributes: ["Classname", "Classdescription"],
      include:[{model:Student,attributes:['id','Studentname']}]
    });
    res.status(200).send(cls);
  };
  //update one class
const updateClass = async (req, res) => {
    let id = req.params.id;
    const cls = await Class.update(req.body, { where: { id: id } });
    res.status(200).send(cls);
  };


  
  
  
  
  
  
  
  
  
  
  module.exports={
    CountStudentsClass,
    addClass,
    getAllClasses,
    getOneClass,
    updateClass,
    deleteClass

  }