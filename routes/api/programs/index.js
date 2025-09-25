const express = require('express');
const router = express.Router({mergeParams: true});
const records = require('../../../mock-data.json');
const { checkValidQuery, checkValidParams } = require('./dto');

router.get('/', [checkValidQuery], (req, res)=>{
  let output = records;
  if(req.query.location){
    output = output.filter(e=>e.location.toLocaleLowerCase().includes(req.query.location.toLocaleLowerCase()));
  }
  if(req.query.contractor){
    output = output.filter(e=>e.contractor.toLocaleLowerCase().includes(req.query.contractor.toLocaleLowerCase()));
  }
  if(req.query.completion_date){
    output = output.filter(e=>new Date(e.completion_date).getTime() == new Date(req.query.completion_date).getTime());
  }
  res.json(output);
});

router.get('/:id', [checkValidParams], (req, res)=>{
  let output = records.find(e=>e.id === parseInt(req.params.id));
  if(output){
    res.json(output);
  }else{
    res.json({});
  }
});

module.exports = router;