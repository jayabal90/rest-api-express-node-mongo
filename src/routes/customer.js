let CustomerModel = require('../models/customer.model')

let express= require('express')

let router= express.Router()

// Create a new customer
//POST localhost:3000/customer
router.post('/customer', (req,res) =>{
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }

    let model= new CustomerModel(req.body)
    model.save()
    .then(doc =>{
        if(!doc || doc.length === 0 ){
            return res.status(500).send(doc)
        }
        res.status(201).send(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

// Get all customer
router.get('/customer', (req,res) => {
    CustomerModel.find()
     .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

//get customer by email
router.get('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send('Missing url parameter :email')
    }
    CustomerModel.findOne({
        email : req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

// update 
router.put('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send('Missing url parameter :email')
    }
    CustomerModel.findOneAndUpdate({
        email : req.query.email
    }, req.body, {
        new : true
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

// Delete
router.delete('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send('Missing url parameter :email')
    }
    CustomerModel.findOneAndRemove({
        email : req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

module.exports=router;
