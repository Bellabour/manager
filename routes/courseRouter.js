const courseController=require('../controllers/courseController')
const router=require('express').Router()


router.post('/addcourse/:id',courseController.addCOurse)








module.exports=router