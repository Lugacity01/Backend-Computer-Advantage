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
  //   callback(null, result);
  // });
};

module.exports = { createMaintenance };
