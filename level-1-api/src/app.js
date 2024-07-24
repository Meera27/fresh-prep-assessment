// Import required modules
import express from 'express';
import cors from 'cors';

// Import route handlers
import userRoutes from './routes/userRoutes.js';
import idRoutes from './routes/idRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Set up routes
app.use('/user', userRoutes);  // Handle single user-related routes
app.use('/users', usersRoutes);  // Handle multiple users-related routes
app.use('/id', idRoutes);  // Handle ID-related routes

// Export the configured Express application
export default app;

