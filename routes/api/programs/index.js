const express = require('express');
const router = express.Router({mergeParams: true});
const records = require('../../../mock-data.json');

router.get('/', (req, res)=>{
  res.json(records);
});

module.exports = router;