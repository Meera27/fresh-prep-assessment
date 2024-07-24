import express from 'express';
import { getRandomUser, getUser, createUser, deleteUser } from '../controllers/userController.js';

// Create a new router instance
const router = express.Router();

// Define routes for user-related operations
router.get('/', getRandomUser);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
// Export the router for use in other parts of the application
export default router;
