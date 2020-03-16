let express = require('express')
let router = express.Router()

//query string => query property on the request object
// localhost:3000/person?name=jayabal 
router.get('/person', (req,res)=>{
    if(req.query.name){
        res.send(`you have request to person ${req.query.name}` )
    }else{
        res.send('you have request to person')
    }
    
})

//params on the request object 
// localhost:3000/person/jayabal
router.get('/person/:name', (req,res)=>{
    res.send(`you have request to person ${req.params.name}` )
})

router.get('/error', (req,res)=>{
    throw new Error('This is forced by error');
})


module.exports=router