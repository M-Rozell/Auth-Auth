
import * as jwt from 'jsonwebtoken';
import { Router } from 'express';
import db from '../../db'; //import the db object from the folder and you don't have to write the index. it will automatically look for that
import config from '../../config'; //to import our jwt secret from config/index.js
import { compareHash } from '../../utils/password';

const router = Router();

router.post('/', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        //check for the users email
        const [userFound] = await db.users.find('email', email); //the first argument here is the column from mysql, and the email from the request body above  
        //a call to the db index that is exporting users form queries/users. also have to import db at the top
        console.log(userFound); //when sent in postman the database info will print in the terminal
        
        //checking if users email is found && if passwords compare and pass
        if ( userFound && compareHash(password, userFound.password)) {
            const token = jwt.sign(   //sign takes at min 2 arguments. 1.a payload(a js object, that is encoded not encrypted. you put in them whatever you want to make a claim about)
                {userid: userFound.id,email: userFound.email,role: 'guest'},//payload
                config.jwt.secret,    //sign it with our secret as our 2nd argument
                { expiresIn: '15d'} // 3rd optional argument: you want to set an expiration date on this so it doesn't last forever. can set days(d), min(m), sec(s), and other methods.
                ); 
            // return res.json('login successful')
            return res.json(token); //test this token at jsonwebtoken.io, paste the token from postman and see your email pop up!
        }
        res.status(401).json({ message: 'invalid credentials'});
        
        //if user is not found
        // console.log(compareHash(password, userFound.password)); //this comes back true when sent in postman
        // console.log(!userFound);
        // if (!userFound || !compareHash(password, userFound.password)) { //compareHash returns a boolean. it will take the password form above(req.body.password) which would be from a form they filled out, and compare it to the password found in the database which is userFound.password
        //     return res.status(401).json({ message: 'invalid credentials'}); //keep this vague for hackers
        // }
        // res.json('login successful!')
        // res.json(userFound);   //using this like a console.log  //you have to (a)wait this promise to be resolved or your code will run syncr and the promise will not get resolved
                                                  
       //this was for testing // res.json({email, password}) //we want to echo this request back to ourselves to test
    
    
    
    } catch (error) {               //to test endpoints and methods before building out the logic
        console.log(error);
        res.status(500).json({ message: 'my code sucks!'});
        
    }
})

export default router;