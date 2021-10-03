const express = require('express');
const router = express.Router();
const config = require('config');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// @route GET api/auth
// @desc Get logged in user
// @access Private
router.get('/', auth, (req, res) => {
  res.send(req.user)
});

// @route POST api/auth
// @desc Auth user & get token
// @access Public
router.post('/', [
  body('email', 'Please enter a valid email').isEmail(),
  body('password', 'Password is required').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({email});
    if(!user) {
      return res.status(400).json({msg: 'Invalid Credentials'})
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({msg: 'Invalid Credentials'})
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 3600
    }, (err, token) => {
      if(err) {
        console.error(err.message)
      } else {
        res.json({token})
      }
    })

  } catch (error) {
    if(error) {
      console.error(error.message);
      res.status(500).send({msg: 'Server Error'})
    }
  }

});


module.exports = router;