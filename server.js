// Depemdencies
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const cookiesController = require('./controllers/cookies')
require('dotenv').config();

// Mongoose Dependencies
const mongoose = require('mongoose');

// Database Config
mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(`${err.message} is mongod not running?`));
db.on('connected', () => console.log('mongo connected :)'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use('/cookies', cookiesController);
app.use('/public', express.static('public'));



// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/contact', (req, res) => {
    res.send('hi')
})





// Listeners
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))