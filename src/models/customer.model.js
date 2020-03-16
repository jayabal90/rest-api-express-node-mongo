let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/rest-api-workshop', {useNewUrlParser: true});

let CustomerSchema= new mongoose.Schema({
    name: String,
    email : {
        type: String,
        required : true,
        unique : true
    }
})

module.exports = mongoose.model('Customer',CustomerSchema)
