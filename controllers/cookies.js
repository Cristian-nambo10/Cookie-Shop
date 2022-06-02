// Dependencies
const express = require('express');
const Cookie = require('../models/cookies');

// Router Object init
const router = express.Router();

//Seed
const seed = require('../models/seed')

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
    Cookie.find({}, (err, allCookie) => {
        res.render('options/index.ejs', {
            cookies: allCookie,
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('options/new.ejs')
})

// Delete


// Update
router.put('/:id', (req, res) => {
    Cookie.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/cookies')
    })
})

// C
router.post('/', (req, res) => {
    Cookie.create(req.body, (err, createdCookie) => {
        res.redirect('/cookies')
    })
})

// E
router.get('/:id/edit', (req, res) => {
    Cookie.findById(req.params.id, (err, foundCookie) => {
        res.render('options/edit.ejs', {
            cookies: foundCookie
        })
    })
})

// S
router.get('/:id', (req, res) => {
    Cookie.findById(req.params.id, (err, foundCookie) => {
        res.render('options/show.ejs', {
            cookies: foundCookie
        })
    })
})


// Export module
module.exports = router;