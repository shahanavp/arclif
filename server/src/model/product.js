const mongoose= require('mongoose')
const Schema =mongoose.Schema //schema definition

const productschema=new Schema({
    productname :{type:String,require:true},
    productimage :{type:String,require:true},
    productcategory :{type:String,require:true},
    productprice :{type:Number,require:true},
    productsize :{type:String,require:true}
}
)
 var productdata=mongoose.model('product_tb',productschema) //model creation
 module.exports=productdata;