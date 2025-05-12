const express = require('express');
const router = express.Router();
const { createMaintenance } = require('../controllers/maintenanceController');


router.get('/', (req, res) => {
    res.send('Maintenance Route');
}); 

router.post('/', createMaintenance);



module.exports = router;
