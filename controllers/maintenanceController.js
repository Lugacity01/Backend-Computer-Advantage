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

const getMaintenance = (req, res) => {
  User.getAllMaintenance((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

const updateMaintenance = (req, res) => {
  const maintenanceId = req.params.id;
  const updateData = req.body;

  if (!updateData.sequence || !updateData.code || !updateData.name || !updateData.status || !updateData.action) {
    return res.status(400).json({ message: 'sequence, code, name, status, action are required' });
  }

  User.updateMaintenanceById(maintenanceId, updateData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Maintenance not found' });
    res.status(200).json({ message: 'Maintenance updated' });
  });
};

const deleteMaintenance = (req, res) => {
  const maintenanceId = req.params.id;

  User.deleteMaintenanceById(maintenanceId, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Maintenance not found' });
    res.status(200).json({ message: 'Maintenance deleted' });
  });
};

module.exports = { createMaintenance, getMaintenance, updateMaintenance, deleteMaintenance };

