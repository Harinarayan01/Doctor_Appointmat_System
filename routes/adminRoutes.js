const express=require('express')
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminCtrl');
const router=express.Router()

// get method ||users
router.get('/getAllUsers',authMiddleware,getAllUsersController)

// get method ||Doctor
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)
// post account status
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)

module.exports=router