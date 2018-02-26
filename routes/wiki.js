'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect('/')
})
router.post('/', (req, res, next) => {
    res.render('addpage')
})
router.get('/add', (req, res, next) => {
    res.render('addpage')
})

module.exports = router;