const mongoose= require('mongoose')
const Schema =mongoose.Schema //schema definition

const paymentschema=new Schema({
  cart_id:{type:Schema.Types.ObjectId,ref:"cart_tb",required:true},
  totalamount :{type:Number,require:true},
  deliveryaddress :{type:String},
  billingaddress :{type:String},
  paymentmethod :{type:String},
  paymentstatus :{type:String},
  bank :{type:String}
}
)
 var paymentdata=mongoose.model('cart_tb',paymentschema) //model creation
 module.exports=paymentdata;