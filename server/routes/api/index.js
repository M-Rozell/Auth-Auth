import { Router } from 'express';
import pizzaRouter from './pizza';


const router = Router();

router.use('/pizza', pizzaRouter); //this uses the logic from the pizza router


export default router;