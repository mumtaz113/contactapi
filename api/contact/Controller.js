// const express = require('express')

const { connect } = require('mongoose');
const user = require('./Model')
const nodemailer=require('nodemailer')
require('dotenv').config()
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secureConnection: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
const contact=async(req,res)=>{
 
    const{message,name,email,subject}=req.body;
    const mailoption={
        from:process.env.SMTP_MAIL,
        to:email,
        subject:subject,
        message:message    
        }
        transporter.sendMail(mailoption,function(error,info){
        if(error)
        {
        console.log(error)
        } 
        else
        {
         console.log('Email Sent SuccesFully')   
        }   
        })
    try {
        await connect(process.env.MONGO_URL)
        
        const checkexist=await user.exists({email:email})
        if(checkexist)
        {
        res.json({
        message:"User already Exist"    
        })    
        }
        else
        {
            await user.create({message,name,email,subject})
            console.log("User Response Recorded Succesfully")
            res.status(201).json({
                message:"User Response Recorded Succesfully"    
                })    
        }
    }
     catch (error) {

    res.json({
    message:error.message   
    })    
    }
        
}

module.exports={contact}