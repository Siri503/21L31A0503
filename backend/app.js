const express=require("express")
const app=express()
const PORT=process.env.PORT || 4500
const dotenv=require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});