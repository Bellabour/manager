
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
   // include:[Course]
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

async function test(req,res){
    let classes=Class.create({Classname:'2',Classdescription:'hard'}).then((Class)=>
    Class.createStudent({Studentname:'hamz'}))
}

async function test1(req,res){
    let classes=Course.create({Coursename:'math',Coursedescription:'difficile'}).then((Course)=>
    Course.createStudent({Studentname:'ham'}))
}

async function test2(req,res){
    const crs = await Course.findOne({where:{id:1}});
    const std=await Student.findOne({where:{id:2}});
    await std.addCourse(crs)
}

//async function count(req,res){
  //  Std=Class.findOne({where:{Classname:'2a'}})
    //await Class.countStudent()
//}


