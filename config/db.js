const mysql = require('mysql2');
// const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const db = mysql.createConnection({
//   host: 'SG-myappdb-12546-mysql-master.servers.mongodirector.com',
//   user: 'sgroot',
//   password: '18gKGxZAj#CmYZ8R',
//   database: 'myapp',  // Replace this with the real name
//   port: 3306,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// const db = mysql.createConnection({
//   host: 'sql302.infinityfree.com',
//   user: 'if0_38970766',
//   password: 'B5lzeAK4KU',
//   database: 'if0_38970766_comadv',  // Replace this with the real name
//   // port: 3306,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

db.connect((err) => {
  console.log(err)
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = db;
