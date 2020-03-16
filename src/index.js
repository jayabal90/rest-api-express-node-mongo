let express = require('express')
let app = express()

let personRoute= require('./routes/person')
let customerRoute= require('./routes/customer')
let path=require('path')

let bodyParser = require('body-parser')

app.use(bodyParser.json())
//middle ware
// show like log file
//Mon Mar 16 2020 18:28:44 GMT+0530 (India Standard Time) => /person/jayabal
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(personRoute)
app.use(customerRoute)

app.use(express.static('public'))

// handler for 404 - Resource not found
app.use((req,res,next)=>{
   res.status(404).send('We think you are lost')
    
})

// handler for 500 - Resource not found
app.use((err,req,res,next)=>{
    //res.status(404).send('We think you are lost')
    console.error(err.stack)
    res.sendFile(path.join(__dirname,'../public/500.html'))
     
 })

const PORT= process.env.PORT||3000
app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))