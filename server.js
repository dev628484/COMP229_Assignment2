import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import authMiddleware from './middlwares/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users/:id', authMiddleware, getUserById);

app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio Application");
});

const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGODB_URI).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});