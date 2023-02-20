const studentController=require('../controllers/studentController.js')
const router=require('express').Router()


router.post('/addStudent',studentController.addStudent)

router.get('/allStudents',studentController.getAllStudents)

router.get('/detail/:id',studentController.getDetailedStudents)


router.get('/countcourses/:id',studentController.Countcourses)

router.put('/:id',studentController.updateStudent)

router.delete('/:id',studentController.deleteStudent)

router.post('/Addcourse/:id',studentController.Addcourse)
router.post('/Addclass/:id',studentController.AddClass)
router.post('/Removecourse/:id',studentController.Removecourse)
router.post('/Removefromclass/:id',studentController.Removefromclass)


module.exports=router