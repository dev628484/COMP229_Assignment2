const mongoose = require ('mongoose');

async function connectDB(uri) {
try {
mongoose.set('strictQuery', true);
await mongoose.connect(uri, { dbName: 'Portfolio' });
console.log('MongoDB connected');
} catch (err) {
console.error('MongoDB connection error:', err.message);
process.exit(1);
}
}


module.exports = { connectDB };