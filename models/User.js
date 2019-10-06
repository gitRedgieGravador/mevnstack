const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    occupation: {
        type: String
    },
    experience: {
        type: Number
    },
    address: {
        type: String
    },
    badges: [
        
    ]


}, {

    });

UserSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// UserSchema.pre('save', function(next) {
//     console.log('before saved')
  
//     // everything is done, so let's call the next callback.
//     next();
  
//   });
  



module.exports = mongoose.model('User', UserSchema);