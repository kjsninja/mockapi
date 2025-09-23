const express = require('express');
const router = express.Router();
const { checkLoginRequest } = require('./dto');
const { checkBlankBody } = require('../common-dto');
const sanitize = require('../../../helper/sanitize');

// check credentials here
router.post('/', [checkBlankBody, checkLoginRequest], async (req, res)=> {
  const body = sanitize.trim(req.body);

  if(body.email == 'admin' && body.password == 'P@ssw0rd'){
    res.send({
      message: 'OK'
    });
  }

  return res.status(401).send({
    message: 'Invalid email or password'
  })


});

module.exports = router;