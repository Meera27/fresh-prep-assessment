import express from 'express';
import { getRandomUser, getUser, createUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getRandomUser);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
