const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var BadgeSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    issuedDate :{
        type: Date,
        required: true
    }
    
  },{
     
  });
  
  //User.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });
  
  
  
  module.exports = mongoose.model('Badge', BadgeSchema);