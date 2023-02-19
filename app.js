const path = require('path');
const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');

const app=express();

app.use(bodyParser.json());
const User=require('./models/user')
const Restaurant=require('./models/restaurant')
const sequelize=require('./util/database')

dotenv.config();
app.use(cors({origin:'*'}));

const userRoute=require('./routes/user')
const RestaurantRoute= require('./routes/restaurant')

app.use(userRoute)
app.use(RestaurantRoute)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,`/public/${req.url}`))
})

sequelize.sync()
.then((result) => {
    app.listen(3000)
}).catch((err) => {
    console.log(err);
});