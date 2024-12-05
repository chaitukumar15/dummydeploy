var express=require("express")
 var app=express()
 app.get("/",(req,res)=>{
    res.send("hi this is the root api")
 }) 

 app.get("/product",(req,res)=>{


     res.send("hi this is product api")

 })

 var port =3002;

 app.listen(port,()=>{
    console.log("server has been started");
    
 })