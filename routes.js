var express = require('express');
const router = express.Router();



router.get('/test',(req,res,next)=>
    {
        req.app.io.emit('connection', {key:"value"});
        // req.app.io.emit('data',{key:"value"});
        res.json({msg:"reached test"})
    }
    );

router.post('/random',(req,res,next)=>{
    console.log("to random");
    res.send(req.body)
})

module.exports = router;