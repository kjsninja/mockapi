const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/auth', require('./api/auth'));
router.use('/programs', require('./api/programs'));

module.exports = router;