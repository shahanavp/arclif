const express= require ("express");
const mongoose =require("mongoose");
const router=require("./src/routes/router")
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://shahana:0lGCgI3FBmyfIWfi@cluster0.hcbre.mongodb.net/arclif_db?retryWrites=true&w=majority",()=>console.log("db connected"))
app.use("/",router)

app.listen(4500,()=>console.log("server started")) 
