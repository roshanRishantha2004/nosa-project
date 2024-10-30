const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function connectDB() {
  await mongoose.connect(MONGO_URL);
}

async function disconnectDB() {
  await mongoose.disconnect();
}

module.exports = {
    connectDB,
    disconnectDB,
}