// const express = require('express')

const { connect } = require('mongoose');
const user = require('./Model')

require('dotenv').config()
const contact=async(req,res)=>{
    
    const{message,name,email,subject}=req.body;
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