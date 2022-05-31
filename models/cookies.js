const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookieSchema = new Schema({
    description: String,
    calories: Number,
    fats: Number,
    protein: Number,
    carbs: Number,
});

module.exports = mongoose.model('Cookie', cookieSchema);