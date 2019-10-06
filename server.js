const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const SECRET = 'Nepenthaceae';


//routes
let Test = require('./models/Test')
 const testRoute = require('./routes/test.route');
 const userRoute = require('./routes/user.route');
// const loginRoute = require('./routes/login.route');

mongoose.Promise = global.Promise;

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/user',userRoute)

app.use('/',
(req,res)=>{
  console.log(req.headers['x-access-token'])
  console.log(req.headers.authorization)
  let testEmail = 'john.doe@gmail.com'
  let testPass = '!trump'
  Test.findOne({
      email:testEmail
    })
    .then(doc => {
      bcrypt.compare(testPass, doc.password)
      .then(match =>{
       
        if (match) {
          console.log("correct")
         res.send()
          // Passwords match
        }else{
          console.log('wrong password')
          res.status(404).json()
        }
      })
      .catch(err =>{
        if(err){
          console.log(err)
         res.json(err)
        }
      })
  
  
  
    })

})
 




app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});