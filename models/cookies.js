const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookieSchema = new Schema({
    name: String,
    description: String,
    calories: Number,
    fats: Number,
    protein: Number,
});

const Cookie = mongoose.model('Cookie', cookieSchema);
module.exports = Cookie;