const express = require('express')
const router = express.Router();
router.post('/foodKaData', (req,res)=>{
    try{
      res.send([global.food_items, global.foodCategories])
    }
    catch(error){
 console.error(error.message);
 res.send("Server Error");
    }
})

module.exports= router;

