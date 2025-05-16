// db.js (or database.js)
// C4KoJAFqtQO2bkBh password
// olabisiajoseh username

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://yinka:yinka12345@comupteradvantage.ywwyprd.mongodb.net/?retryWrites=true&w=majority&appName=comupteradvantage'
    //     , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
