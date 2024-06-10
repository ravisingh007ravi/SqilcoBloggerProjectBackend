const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{type:String, required: true, trim:true},
    username:{type:String, required: true, trim:true},
    Password:{type:String, required: true, trim:true}
},
    {timestamps:true}
)

module.exports = mongoose.model('userdata',authorSchema);