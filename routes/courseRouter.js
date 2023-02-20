const courseController=require('../controllers/courseController')
const router=require('express').Router()


router.post('/addcourse',courseController.addCourse)
router.put('/updatecourse/:id',courseController.updateCourse)
router.delete('/deletecourse/:id',courseController.deleteCourse)
router.get('/getcourse/:id',courseController.getOneCourse)
router.get('/getcourses',courseController.getAllCourses)





module.exports=router