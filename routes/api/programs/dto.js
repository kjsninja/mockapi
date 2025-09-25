const joi = require('joi');
const { joiValidate } = require('../../../helper/requestValidator');
const sanitize = require('../../../helper/sanitize');

const CreateValidQuery = joi.object({
  contractor: joi.string().min(1).max(200),
  location: joi.string().min(1).max(100),
  completion_date: joi.date(),
})

const CreateValidIdParams = joi.object({
  id: joi.number().integer().required()
})

const checkValidQuery = function(req, res, next){
  const validate = CreateValidQuery.validate(sanitize.trim(req.query));
  joiValidate(validate, req, res, next);
}

const checkValidParams = function(req, res, next){
  const validate = CreateValidIdParams.validate(sanitize.trim(req.params));
  joiValidate(validate, req, res, next);
}

module.exports = {
  checkValidQuery,
  checkValidParams
}