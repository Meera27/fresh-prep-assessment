import express from 'express';
import { getId } from '../controllers/idController.js';

const router = express.Router();

router.get('/', getId);

export default router;
