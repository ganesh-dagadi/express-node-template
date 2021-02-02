const express = require('express');

let router = express.Router();


router.get('/' , (req , res)=>{
    let user = undefined
    res.render('../views/index/home.ejs' , {user : user})
})


module.exports = router;