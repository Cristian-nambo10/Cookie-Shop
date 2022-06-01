const router = require('express').Router();
const Cookie = require('../models/cookies');

//Seed
const seed = require('../models/cookie')

router.get('/seed', (req, res) => {
    Cookie.deleteMany({}, (err, allCookie) => {});

    Cookie.create(seed, (err, data) => {
        res.redirect('/cookies');
    })
})

// Everything here is like doing /cookies first ...

// Routes

// I
router.get('/', (req, res) => {
    Cookie.find({}, (err, foundCookie) => {
        res.render('options/index.ejs', {
            cookies: foundCookie
        })
    })
})

// N

// D

// U

// C

// E

// S


// Export module
module.exports = router;