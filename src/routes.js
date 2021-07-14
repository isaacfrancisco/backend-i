const express = require('express');

const CollaboratorController = require('./controllers/CollaboratorController');
const MarkingController = require('./controllers/MarkingController');

const router = express.Router();

router.get('/collaborators', CollaboratorController.index);
router.post('/collaborators', CollaboratorController.store);
router.put('/collaborators/:collaborator_id', CollaboratorController.update);
router.delete('/collaborators/:collaborator_id', CollaboratorController.delete);

router.get('/markings', MarkingController.index);
router.post('/markings', MarkingController.store);
router.put('/markings/:marking_id', MarkingController.update);
router.delete('/markings/:marking_id', MarkingController.delete);

module.exports = router;