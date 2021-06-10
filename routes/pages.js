const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'La centrifugadora' }));

module.exports = router;