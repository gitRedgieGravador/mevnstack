const express = require('express');
const userRoute = express.Router();



//require models

let User = require('../models/User')
let Badge = require('../models/Badge')

userRoute.route('/regular/profile/:id').post(function (req, res) {
        console.log('hello')
            User.findOne({
                    username: req.params.id
                }, {
                    badges: 0
                })
                .then(doc => {
                    if (doc) {
                        res.json(doc)

                    } else {
                        res.status(404).send()
                    }
                }).catch(err => {
                    if (err) {
                        res.send(err);
                    }
    });
});

userRoute.route('/regular/:id').post(function (req, res) {
    //console.log('hekk')
            User.findOne({
                username: req.params.id
                })
            .then(docs => {
                    if (docs) {
                        // making an array of ids   
                        let arrBadgeID = []
                        for (let i = 0; i < docs.badges.length; i++) {
                            arrBadgeID.push(docs.badges[i]._id)
                        }

                            //finding the badges info
                         Badge.find({
                                 _id: {
                                      $in: arrBadgeID
                                }
                            })
                            .then(badges => {
                                 if (badges.length) {
                                   // console.log(badges)
                                    res.json(badges)
                                } else {
                                   // console.log('not found')
                                    res.status(404).send()

                                }
                            })
                            .catch(err => {
                                    if (err) {
                                        res.send(err);
                                    }
                                })
                                
                            }
                         });
});

//update user info
userRoute.route('/regular/profile/update/:id').post(function (req, res) {
    console.log("hello")

    User.findOne({
            username: req.params.id
        }, {
            badges: 0
        })
        .then(doc => {
            if (doc) {
                res.json(doc)

            } else {
                res.status(404).send()
            }
        }).catch(err => {
            if (err) {
                res.send(err);
            }
        });

});

 module.exports = userRoute;