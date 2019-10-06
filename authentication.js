// for log in 
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

  //for registration and hashing password before saving to the db
  req.body = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: '!trump'
  }

 let test = new Test(req.body)
  
  test.save()
  .then(()=> {
    console.log('saved')
    res.end()
  })
  .catch(err =>{
    if (err){
      res.json({
        message: 'error',
        description: 'some error occoured while saving the user in database.'
      });
    }
  })
 