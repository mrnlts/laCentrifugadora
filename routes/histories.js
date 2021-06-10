const express = require('express');

const router = express.Router();

router.get('/cat', (req, res) => res.render('cat'))
router.get('/cas', (req, res)=> res.render('cas'))
router.get('/eus', (req, res)=> res.render('eus'))
router.get('/gal', (req, res) => res.render('gal'))

module.exports = router;