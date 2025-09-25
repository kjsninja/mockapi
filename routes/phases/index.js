const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/phases', require('./route'));

module.exports = router;