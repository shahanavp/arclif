const mongoose= require('mongoose')
const Schema =mongoose.Schema //schema definition

const cartschema=new Schema({
    product_id:{type:Schema.Types.ObjectId,ref:"product_tb",required:true},
    quantity :{type:Number,require:true},
    amount :{type:Number,require:true}
} 
)
 var cartdata=mongoose.model('cart_tb',cartschema) //model creation
 module.exports=cartdata;