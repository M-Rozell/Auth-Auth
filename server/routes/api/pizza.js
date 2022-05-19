import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => {            //logic from the pizza router
    res.json({ message: 'Pizza Time!' })
});


export default router;