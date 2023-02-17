const express=require('express');
const bodyParser=require('body-parser');
const path= require('path');
const sequelize=require('sequelize');
const db = require('./models')
db.sequelize = sequelize;
const service=require('./service/class')
const app=express();




app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//routes
const courseRouter=require('/routes/courseRouter')
app.use('/api/courses',courseRouter)
const studentrouter= require('./routes/studentRouter')
app.use('/api/students',studentrouter)
const classrouter=require('./routes/classRouter')
app.use('/api/class',classrouter)


app.listen(4000,()=>console.log('Listening on port 4000'));