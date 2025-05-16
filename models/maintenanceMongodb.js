// import express from 'express';
import mongoose from 'mongoose';

const MaintenanceSchema = new mongoose.Schema({
    sequence: { type: String, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
    action: { type: String, required: true },
    // checkIn: { type: Date, required: true },
    // checkOut: { type: Date, required: true },
}, { timestamps: true });


const MaintenanceBooking = mongoose.model('MaintenanceBooking', MaintenanceSchema);

export default MaintenanceBooking;