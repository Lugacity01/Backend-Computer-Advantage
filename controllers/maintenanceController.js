const User = require('../models/maintenanceModel.js');

const createMaintenance = (req, res) => {
  const userData = req.body;
  if (!userData.sequence || !userData.code || !userData.name || !userData.status || !userData.action) {
    return res.status(400).json({ message: 'sequence, code, name, status, action are required' });
  }

  User.createMaintenance(userData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Maintenance created', userId: result.insertId });
  });
};

module.exports = { createMaintenance };
