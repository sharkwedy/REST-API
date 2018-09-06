const mongoose = require('mongoose');
const { Schema } = mongoose;

const evaluationSchema = new Schema({
    name: { type: String, required: true },
    movie: { type: String, required: true },
    evaluation: { type: String, required: true }
});

module.exports = mongoose.model('Evaluation', EvaluationSchema);
