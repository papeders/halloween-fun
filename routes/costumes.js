const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.costumes.index);
router.get('/new', ctrl.costumes.renderNew);
router.get('/:index', ctrl.costumes.showCostume);
router.get('/:index/edit', ctrl.costumes.costumeEditor);
router.put('/:index', ctrl.costumes.editCostume);
router.post('/', ctrl.costumes.postCostume);
router.delete('/:index', ctrl.costumes.deleteCostume);



module.exports = router;