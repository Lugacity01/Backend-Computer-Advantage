// db.js (or database.js)
// C4KoJAFqtQO2bkBh password
// olabisiajoseh username

import mongoose from 'mongoose';

console.log(process.env.username)
console.log(process.env.userpassword)

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb+srv://yinka:yinka12345@comupteradvantage.ywwyprd.mongodb.net/?retryWrites=true&w=majority', {
    // olabisiajoseh
    // QTBDYVwEFu1oEtTE
    // await mongoose.connect(`mongodb://olabisiajoseh:QTBDYVwEFu1oEtTE@cluster0-shard-00-00.yhbag0v.mongodb.net:27017,cluster0-shard-00-01.yhbag0v.mongodb.net:27017,cluster0-shard-00-02.yhbag0v.mongodb.net:27017/dbname?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority`, {
    await mongoose.connect(`mongodb+srv://olabisiajoseh:QTBDYVwEFu1oEtTE@cluster0.yhbag0v.mongodb.net/?retryWrites=true&w=majority`, {
// 
    // await mongoose.connect('mongodb+srv://olabisiajoseh:QTBDYVwEFu1oEtTE@cluster0.yhbag0v.mongodb.net/?retryWrites=true&w=majority', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      // socketTimeoutMS: 45000, // Close sockets after 45s of inactivity

      
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      retryWrites: true,
      retryReads: true,
      // Helps with DNS issues:
      // directConnection: true
    });
    //     , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // }
// );
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
