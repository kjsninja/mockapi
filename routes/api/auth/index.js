const express = require('express');
const router = express.Router();
const { checkLoginRequest } = require('./dto');
const { checkBlankBody } = require('../common-dto');
const sanitize = require('../../../helper/sanitize');
const config = require('../../../config')

// check credentials here
router.get('/basic', require('./basic'));

router.post('/', [checkBlankBody, checkLoginRequest], async (req, res)=> {
  const body = sanitize.trim(req.body);

  if(body.email == config.temp.user && body.password == config.temp.password){
    res.send({
      message: 'OK'
    });
  }

  return res.status(401).send({
    message: 'Invalid email or password'
  })


});

module.exports = router;