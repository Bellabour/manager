
const express=require('express');
const router = express.Router()//getting router portion frome express


const db = require('../models');
const Classes = require('../models/Classes');
const Student=require('../models').Students;
const Course=require('../models').Courses;
const Class=require('../models').Classes;
const StudentCourses=require ('../models/StudentCourses')



//async function result(req,res){

    //const {id} = req.body

    //const data = student.findOne({where: {id}});
    //data.set({

    //})
    //await Course.create({
   //Coursename:'fran'})
    //.then((data)=>{
     //   cass=data;
       // Student.create({
        //name:'math'
    //})}).then((data)=>{
    //course=data;
    //Class.setStudent(data);})
    //where:{Studentname:'chip'},
   // include:Class
//})
//};
//console.log(result)
//const result = await Student.findAll({
    include:[Course]
//})

//}
//result();


//async function creation(req,res){
 //await Class.findOne({Classname:'french',Classdescription:'this is math'}).then((Class)=>
// Class.createStudent({Studentname:'chip'}))
// .then(()=>console.log('Created'))}
//await Class.create({Classname:'English',Classid:7});
//const student=await Student.create({Studentname:'bour',ClassId:'7'});
//console.log((await Student.findOne().ClassId));

//creation();

