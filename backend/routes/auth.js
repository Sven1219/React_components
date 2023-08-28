const express = require('express');
     const passport = require('passport');
     const bcrypt = require('bcrypt');
     const User = require('../models/User');

     const router = express.Router();
    
     router.post('/register', (req, res, next) => {
      console.log(1);
       const { name, email, password } = req.body;

       User.findOne({ email: email }, (err, user) => {
         if (err) return next(err);
         if (user) return res.status(409).json({ message: 'Email already registered' });

         bcrypt.hash(password, 10, (err, hashedPassword) => {
           if (err) return next(err);

           const newUser = new User({
             name: name,
             email: email,
             password: hashedPassword,
           });

           newUser.save((err) => {
             if (err) return next(err);
             res.status(201).json({ message: 'Registration successful' });
           });
         });
       });
     });

     router.post('/login', passport.authenticate('local'), (req, res) => {
       res.status(200).json({ message: 'Login successful' });
     });

     router.get('/logout', (req, res) => {
       req.logout();
       res.status(200).json({ message: 'Logout successful' });
     });

     module.exports = router;