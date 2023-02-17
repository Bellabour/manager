const classController=require('../controllers/classController')
const router=require('express').Router()

router.post('/addclass',classController.addClass)
router.put('/updateclass/:id',classController.updateClass)
router.delete('/deleteclass/:id',classController.deleteClass)


router.get('/getoneclass/:id',classController.getOneClass)
router.get('/classcount/:id',classController.CountStudentsClass)
router.get('/getallclass',classController.getAllClasses)



module.exports=router