const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')
const khra = require('../models/aq')



router.get('/bd',async(req,res)  => {
    try{
        const bd = await khra.find()
        res.json(bd)
 }catch(err){
     res.send('Error ' + err)
 }    
})
router.post('/',async(req,res)  => {
    const khrae = new khra({
        email : req.body.email,
        password : req.body.password
    });
    khrae.save()
         .then(data => {
              res.json(data);
        })
         .catch(err => {
             res.json({message : err})

        })
});
module.exports = router