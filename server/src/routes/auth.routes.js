import express from 'express';
import { CheckAuth, createAccount, getLoggedInUser, login } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/create-account', createAccount);
router.post('/login', login);
router.get('/me', protect, getLoggedInUser);
router.get('/check', CheckAuth)

export default router;