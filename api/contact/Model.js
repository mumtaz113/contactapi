const{Schema,model}=require('mongoose')
const UserSchema=new Schema({
message:{
type:String,
require:true    
},
name:{
    type:String,
    require:true    
    },
email:{
    type:String,
    require:true,
    unique:true    
    },
subject:{
    type:String,
    require:true    
    }        

})
const cnctctuser=model('cnctctuser',UserSchema)
module.exports=cnctctuser