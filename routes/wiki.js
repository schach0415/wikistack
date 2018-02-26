'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`hello from ${req.path} by ${req.method}`)
})
router.post('/', (req, res, next) => {
    res.send(`hello from ${req.path} by ${req.method}`)
})
router.get('/add', (req, res, next) => {
    res.send(`hello from ${req.path} by ${req.method}`)
})

module.exports = router;