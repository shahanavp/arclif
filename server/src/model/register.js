const mongoose= require('mongoose')
const Schema =mongoose.Schema //schema definition

const registerschema=new Schema({
    phonenumber :{type:Number,require:true},
    name :{type:String,require:true},
    email :{type:String,require:true},
    roletype :{type:String,require:true},
   
},
{
    timestamps:true
})
 var registerdata=mongoose.model('register_tb',registerschema) //model creation
 module.exports=registerdata;