import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes
app.use('/', userRoutes);

export default app;