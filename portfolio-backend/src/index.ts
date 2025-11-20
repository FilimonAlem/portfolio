import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import projectRoutes from './routes/project.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI!;
 
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected 🚀');
    app.listen(5000, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));

 app.get('/', (req, res) => {
  res.send('Portfolio backend is running!');
}); 