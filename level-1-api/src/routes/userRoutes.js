import express from 'express';
import { getId, getUser, createUser } from '../controllers/userController.js';

const router = express.Router();

// Defining routes and link them to controller functions
router.get('/id', getId);
router.get('/user', getUser);
router.post('/user', createUser);

export default router;
