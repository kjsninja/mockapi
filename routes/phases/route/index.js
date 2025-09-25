const express = require('express');
const router = express.Router({mergeParams: true});
const Phases = require('../../../models/Phases');
const { checkPhaseParamsId, checkCreateRequest, checkUpdateRequest } = require('../dto');

router.get('/:id', [checkPhaseParamsId], async (req, res)=>{
  return res.json(await Phases.getPhaseById(parseInt(req.params.id)))
});

router.get('/programs/:id', [checkPhaseParamsId], async (req, res)=>{
  return res.json(await Phases.getAllPhaseByProgramId(parseInt(req.params.id)))
});

router.put('/:id', [checkPhaseParamsId, checkUpdateRequest], async (req, res)=>{
  return res.json(await Phases.updatePhase(parseInt(req.params.id), req.body))
});

router.delete('/:id', [checkPhaseParamsId], async (req, res)=>{
  return res.json(await Phases.deletePhaseById(parseInt(req.params.id)))
});

router.get('/', async (req, res)=>{
  return res.json(await Phases.getAllPhases())
});

router.post('/', [checkCreateRequest], async (req, res)=>{
  return res.json(await Phases.create(req.body))
});


module.exports = router;