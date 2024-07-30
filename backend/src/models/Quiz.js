const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  question_number: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correct_answer: { type: Number, required: true }
});

module.exports = mongoose.model('Quiz', QuizSchema);
