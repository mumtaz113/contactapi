const express = require('express');
const app=express();
require('dotenv').config();
const port=process.env.SERVER_PORT || 2000;
const mongoose=require('mongoose')
app.use(express.json())
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use('/api',require('./api/contact/Router'))
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err.message))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports=app