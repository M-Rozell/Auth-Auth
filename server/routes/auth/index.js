import { Router } from 'express';
import loginRouter from './login'; //this creates the login router path

const router = Router();

router.use('/login', loginRouter) //this router is going to use on the path of /login the logic of loginRouter

export default router;