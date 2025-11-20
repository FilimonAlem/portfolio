import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;
const PORT = process.env.PORT || 5000;
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Atlas connected.'))
  .catch(err => console.error('MongoDB connection error:', err));