import { Router } from 'express';
import apiRouter from './api'; //these create the path
import authRouter from './auth';

const router = Router();

router.use('/api', apiRouter); //these tell it to use this route path
router.use('/auth', authRouter);



export default router;