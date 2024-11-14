import mongoose from 'mongoose';

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/nexusDB', );

// Export connection 
export default mongoose.connection;
