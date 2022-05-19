import { Router } from 'express';
import pizzaRouter from './pizza'; //name these routers whatever you want


const router = Router();

router.use('/pizza', pizzaRouter); //this uses the logic from the pizza router


export default router;