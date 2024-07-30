const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


// Route to register a new user
router.post('/register', async (req, res) => {
  const { username, password, email, animal } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({
    username,
    password: hashedPassword,
    email,
    animal
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
    console.log(user)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to login a user 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});


// Route to verify email and favorite animal
router.post('/verify-security-question', async (req, res) => {
  const { email, animal } = req.body;

  try {
    const user = await User.findOne({ email, animal });
    if (user) {
      res.status(200).json({ message: 'Security question verified. Proceed to reset password.' });
    } else {
      res.status(400).json({ message: 'Incorrect email or favorite animal.' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to reset the password
router.post('/reset-password', async (req, res) => {
  const { email, animal, newPassword } = req.body;

  try {
    const user = await User.findOne({ email, animal });
    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      res.status(200).json({ message: 'Password reset successfully.' });
    } else {
      res.status(400).json({ message: 'Incorrect email or favorite animal.' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user info
router.post('/profile', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json({user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



module.exports = router;
