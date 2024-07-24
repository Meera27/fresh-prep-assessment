import express from 'express';
import { getUsers} from '../controllers/userController.js';

// Create a new router instance
const router = express.Router();

// Define route for getting all users
router.get('/', getUsers);

// Export the router for use in other parts of the application
export default router;