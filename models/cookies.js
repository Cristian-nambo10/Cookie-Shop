const mongoose = require('mongoose');

const cookieSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    calories: Number,
    fats: Number,
    protein: Number,
});

const Cookie = mongoose.model('Cookie', cookieSchema);
module.exports = Cookie;