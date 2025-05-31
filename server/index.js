import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './src/lib/db.js';
import authRouter from './src/routes/auth.routes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Configure CORS to allow requests from frontend
app.use(cors({
    origin: 'http://localhost:5173', // Allow your Vite dev server
    credentials: true // Allow cookies if needed
}));

app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
