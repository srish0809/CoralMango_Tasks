const Sequelize= require('sequelize')
const sequelize= new Sequelize('zomato','root','Srashti@1234',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;