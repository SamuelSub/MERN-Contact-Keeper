const express = require('express');
const router = express.Router();
const config = require('config');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// @route POST api/users
// @desc Register a user
// @access Public 
router.post('/', [
  body('name', 'name is required').not().isEmpty(),
  body('email', 'please include a valid email').isEmail(),
  body('password', 'please enter a password with 6 or more charachters').isLength({min: 6})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { name, email, password } = req.body;
  
  try {
    let user = await User.findOne({email});
    if(user) {
      return res.status(400).json({msg: 'user already exists'})
    }

    // Probably used the same var to save space in allocating more memory for a new var
    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

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
    console.error(error.message);
    res.status(500).send('Server Error')
  }

});

module.exports = router;