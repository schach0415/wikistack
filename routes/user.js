'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // res.render('index')
})
router.get('/:userId', (req, res, next) => {
    const userId = req.params.userId
})
router.post('/', (req, res, next) => {
    // res.render('addpage')
})
router.put('/', (req, res, next) => {
    // res.render('addpage')
})
router.delete('/add', (req, res, next) => {
    // res.render('addpage')
})

module.exports = router;