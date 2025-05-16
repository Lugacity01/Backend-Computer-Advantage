const express = require('express');
const { getMaintenance, createMaintenance, deleteMaintenance, updateMaintenance } = require('../controllers/maintenanceMongodbController');
const router = express.Router();
// const { createMaintenance, deleteMaintenance, updateMaintenance, getMaintenance } = require('../controllers/maintenanceController');


router.get('/', (req, res) => {
    res.send('Maintenance Route');
}); 

router.get('/all', getMaintenance);

router.post('/', createMaintenance);

router.put('/', updateMaintenance);

router.delete('/', deleteMaintenance);


module.exports = router;
