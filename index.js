const express = require('express');
const app=express();
require('dotenv').config();
const port=process.env.SERVER_PORT || 2000;
const mongoose=require('mongoose')
app.use(express.json())
var cors = require('cors')
app.use(cors())
app.use('/api',require('./api/contact/Router'))
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log("SomeThing went Wrong"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports=app