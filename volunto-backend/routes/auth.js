const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require("dotenv/config");

const mongoose = require('mongoose');
const User = mongoose.model('Users');



// token
const jwt = require("jsonwebtoken");
// secret token
const JWT_SECRET = process.env.JWT_SECRET;
// -jwt - password encryption

// signup
router.post('/signup', (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(422).json({ error: "Please insert all the required fields !" });
    }
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser){  //true or false
            return res.status(422).json({error:"email already exists !"})
        }
        bcrypt.hash(password, 8)
        .then(hassedpass=>{
            const user = new User({
                email,
                password:hassedpass,
                firstName,
                lastName
            })
            user.save()
            .then(user =>{
                res.json({message:'Account created sucessfully :)'})
            })
            .catch(err=>{
                console.log(err)
            })
        })   
    })
    .catch(err => console.log(err))

})

// login

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({error:"please enter your email and password :("})
    } 
    User.findOne({email :email})
    .then(savedUser =>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password :("})
        }
        bcrypt.compare(password, savedUser.password)
        .then( domatch =>{
            if(domatch){
                // return res.json({message:"successfully signed in" })
                // we are passing json token
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                const {_id, firstName, lastName, email} = savedUser
                res.json({token, user:{_id, firstName, lastName, email}})
            }
            else{
                return res.status(422).json({error:"Invalid email or password :("})
            }
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

})

module.exports = router;
