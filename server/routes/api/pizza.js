import * as jwt from 'jsonwebtoken'; //this is needed to validate our token
import config from '../../config'; //where our secret signature is found
import { Router } from 'express';

const router = Router();

//we need to say 'if there is no token, you don't get pizza time'

router.get('/', (req,res) => {            //logic from the pizza router
    try {
       //no token? no go
    // console.log(req.headers.authorization?.split(' ')) //this split method will break it into an array of elements
    const bearerToken = req.headers.authorization?.split(' '); //we need to split this into an array so we can confirm this... const token = bearerToken[0] === "Bearer" && bearerToken[1];
    
    //if bearerToken at [0] is 'Bearer and that is true we are going to grab bearerToken[1] at position 1.
    const token = bearerToken && bearerToken[0] === "Bearer" ? bearerToken[1] : null;
    if (!bearerToken || !token) {
        res.status(401).json({ message: 'unauthorized'});
        return;
    }

    //validate that the token is not expired and has the correct signature
    const payload = jwt.verify(token, config.jwt.secret); //this will return the token's payload.
    console.log(payload);

    // console.log(token);
    res.json({ message: `Enjoy your pizza time ${payload.email}!` }) 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks', error: error.message})
    }
});


export default router;