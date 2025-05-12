const express = require('express');
const router = express.Router();
const controller = require('../controllers/applicationController');

router.post('/apply', controller.submitApplication);
router.get('/stats', controller.getStatistics);
router.get('/applications', controller.getApplications); // Now supports ?status= query param
router.put('/applications/:id/status', controller.updateStatus);

module.exports = router;