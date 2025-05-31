import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './src/lib/db.js';

import authRouter from './src/routes/auth.routes.js'

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
