// const Maintenance = require('../models/maintenanceMongodb.js');


const { default: Maintenance } = require('../models/maintenanceMongodb.js');

const createMaintenance = async (req, res) => {
    const userData = req.body;
    if (!userData.sequence || !userData.code || !userData.name || !userData.status) {
        return res.status(400).json({ message: 'sequence, code, name, status, action are required' });
    }
    try {
        const maintenance = new Maintenance(userData);
        await maintenance.save();
        res.status(201).json({ message: 'Maintenance created', id: maintenance._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMaintenance = async (_, res) => {
    try {
        const maintenances = await Maintenance.find();
        res.status(200).json(maintenances);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateMaintenance = async (req, res) => {
    const maintenanceId = req.body.id;
    const updateData = req.body;
    if (!updateData.sequence || !updateData.code || !updateData.name || !updateData.status || !updateData.action) {
        return res.status(400).json({ message: 'sequence, code, name, status, action are required' });
    }
    try {
        const result = await Maintenance.findByIdAndUpdate(maintenanceId, updateData, { new: true });
        if (!result) return res.status(404).json({ message: 'Maintenance not found' });
        res.status(200).json({ message: 'Maintenance updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteMaintenance = async (req, res) => {
    const maintenanceId = req.body.id;
    if (!maintenanceId) {
        return res.status(400).json({ message: 'Maintenance ID is required' });
    }
    try {
        const result = await Maintenance.findByIdAndDelete(maintenanceId);
        if (!result) return res.status(404).json({ message: 'Maintenance not found' });
        res.status(200).json({ message: 'Maintenance deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createMaintenance, getMaintenance, updateMaintenance, deleteMaintenance };
