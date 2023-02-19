const express= require('express')
const router= express.Router();

const restaurant=require('../controller/restaurant');

router.post('/restaurant/post-restaurant',restaurant.Restaurants);

module.exports = router;