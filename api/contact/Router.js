const express = require('express')
const app=require('express')
const router=express.Router()
const{contact}=require('./Controller')
router.post('/contact',contact)
module.exports=router