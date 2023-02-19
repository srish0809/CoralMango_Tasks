const Restaurant=require('../models/restaurant')

exports.Restaurants=async(req,res)=>{
    try {
    
        const name=req.body.name;
        const address=req.body.address;
          const data= await Restaurant.create({
            name:name,
            address:address
        })
              
        res.status(201).json({success:true,message:data});
        } 
        catch (error)
         {
        console.log(error);
        res.status(500).json({error:error})  
    }
}
