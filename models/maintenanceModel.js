const db = require('../config/db');

const createMaintenance = (user, callback) => {
  // const { name, email } = user;
  const {sequence, code, name, status, action } = user;
  // const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const sql = 'INSERT INTO users (sequence, code, name, status, action) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [sequence, code, name, status, action], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
  // db.query(sql, [name, email], (err, result) => {
  //   if (err) return callback(err);
  //   cactionallback(null, result);
  // });
};


const getAllMaintenance = (callback) => {
  const sql = 'SELECT * FROM users'; // Adjust table name if needed
  db.query(sql, callback);
};

const updateMaintenanceById = (id, user, callback) => { 
  const { sequence, code, name, status, action } = user;
  const sql = 'UPDATE users SET sequence = ?, code = ?, name = ?, status = ?, action = ? WHERE id = ?';
  db.query(sql, [sequence, code, name, status, action, id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}

const deleteMaintenanceById = (id, callback) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}

module.exports = { createMaintenance, getAllMaintenance, updateMaintenanceById, deleteMaintenanceById };
