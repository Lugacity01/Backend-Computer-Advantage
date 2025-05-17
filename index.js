require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const { default: connectDB } = require('./config/dbMongo');


connectDB();

app.use(cors({ origin: '*' }));
// app.options('*', cors())

app.use(express.json());
app.use('/', maintenanceRoutes);


// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// require('dotenv').config();
// // MySQL connection setup
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL as ID ' + db.threadId);
// });

// // Example route
// app.get('/', (req, res) => {
//   res.send('Hello from Node.js with MySQL!');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
