import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import qualificationRoutes from './routes/qualificationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import authMiddleware from './middleware/auth.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


// Protected test route
app.get('/api/me', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});


// Base route
app.get('/', (req, res) => {
res.send('Welcome to My Portfolio application');
});


const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGODB_URI).then(() => {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});