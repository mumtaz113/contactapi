const express = require('express')
const app=require('express')
const router=express.Router()
const{contact}=require('./Controller')
router.post('/contact',contact).post((req,res)=>{
        const message=req.body.message;
        const name=req.body.name;
        const email=req.body.email;
        const subject=req.body.subject;
    const newnote=new Note({
        message, 
        name,
        email,
        subject

       })
       newnote.save();    
})

module.exports=router