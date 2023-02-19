const Sequelize= require('sequelize')
const sequelize=require('../util/database')
const Review= sequelize.define('review',{
id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
},
text:{
    type:Sequelize.STRING,
    allowNull:false
}
})
module.exports=Review;