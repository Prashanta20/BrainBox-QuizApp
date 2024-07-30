// Import necessary modules
const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');


// Route to get a quiz question by question_number
router.get('/question/:question_number', async (req, res) => {
  const { question_number } = req.params;

  try {
    const question = await Quiz.findOne({ question_number: question_number });

    if (!question) {
      return res.status(404).json({ msg: 'Question not found' });
    }

    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to get all quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes from the database
    res.json(quizzes); // Send the quizzes as a JSON response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Send an error response if something goes wrong
  }
});

// Route to add a new quiz
router.post('/quizzes', async (req, res) => {
  const quiz = new Quiz({
    question_number: req.body.question_number,
    question: req.body.question,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer
  });

  try {
    const newQuiz = await quiz.save(); // Save the new quiz to the database
    res.status(201).json(newQuiz); // Send the newly created quiz as a JSON response
  } catch (err) {
    res.status(400).json({ message: err.message }); // Send an error response if something goes wrong
  }
});

// Export the router
module.exports = router;
