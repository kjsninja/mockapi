const joi = require('joi');
const { joiValidate } = require('../../helper/requestValidator');
const sanitize = require('../../helper/sanitize');

const CheckPhaseId = joi.object({
  id: joi.number().integer().required()
})

const UpdatePhaseDTO = joi.object({
  program_id: joi.number().integer(),
  number: joi.number().integer().greater(0).less(30),
  allocation: joi.number().greater(0).less(1000000000),
  from_year: joi.number().integer().greater(2000).less(2030),
  to_year: joi.number().integer().greater(2000).less(2030)
})

const CreatePhaseDTO = joi.object({
  program_id: joi.number().integer().required(),
  number: joi.number().integer().greater(0).less(30).required(),
  allocation: joi.number().greater(0).less(1000000000).required(),
  from_year: joi.number().integer().greater(2000).less(2030).required(),
  to_year: joi.number().integer().greater(2000).less(2030).required()
})

const checkCreateRequest = function(req, res, next){
  const validate = CreatePhaseDTO.validate(sanitize.trim(req.body));
  joiValidate(validate, req, res, next);
}

const checkUpdateRequest = function(req, res, next){
  const validate = UpdatePhaseDTO.validate(sanitize.trim(req.body));
  joiValidate(validate, req, res, next);
}

const checkPhaseParamsId = function(req, res, next){
  const validate = CheckPhaseId.validate(sanitize.trim(req.params));
  joiValidate(validate, req, res, next);
}


module.exports = {
  checkPhaseParamsId,
  checkCreateRequest,
  checkUpdateRequest
}