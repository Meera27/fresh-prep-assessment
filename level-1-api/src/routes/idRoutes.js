import express from 'express';
import { getId } from '../controllers/idController.js';

// Create a new router instance for id
const router = express.Router();

// Define a route for GET requests to the root path
router.get('/', getId);

// Export the router for use in other parts of the application
export default router;

