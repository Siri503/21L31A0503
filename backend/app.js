// const express = require("express");

// const app = express();
// const PORT = process.env.PORT || 4500;
// const data = require('./data');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/top-products', (req, res) => {
//   const company = req.query.company;
//   const category = req.query.category;
//   const top = req.query.top;
//   const minPrice = req.query.minPrice;
//   const maxPrice = req.query.maxPrice;

//   const filteredData = data.laptopsData.filter(item => {
//     if (company && item.productName.indexOf(company) === -1) return false;
//     if (category && item.productName.indexOf(category) === -1) return false;
//     if (top && item.rating < top) return false;
//     if (minPrice && item.price < minPrice) return false;
//     if (maxPrice && item.price > maxPrice) return false;
//     return true;
//   });

//   res.json(filteredData);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });
const express = require('express');
const axios = require('axios');
const dotenv=require('dotenv').config()
const PORT = process.env.PORT || 8000 
const accessToken=process.env.ACCESS_TOKEN

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send("hi")
})
app.use('/product',require('./routes/product'))

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))