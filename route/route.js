const express=require('express')
const teacherController=require('../Controller/teacherController')
const studentController=require('../Controller/studentController')
const jwtMiddle=require('../middlewares/jwtMiddleware')
const multerMiddle=require('../middlewares/multerMiddleware')

const router=express.Router()


router.post('/reg',teacherController.teacherRegistration)
router.post('/log',teacherController.teacherLogin)
router.post('/addstudent',jwtMiddle,multerMiddle.single('image'),studentController.addStudents)
router.get('/students',jwtMiddle,studentController.getStudents)
router.delete('/delstudent/:sid',jwtMiddle,studentController.deleteStudent)
router.put('/updatestudent/:sid',jwtMiddle,multerMiddle.single('image'),studentController.updateStudent)

module.exports=router