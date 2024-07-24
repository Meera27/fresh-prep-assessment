import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import idRoutes from './routes/idRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/id', idRoutes);

export default app;
