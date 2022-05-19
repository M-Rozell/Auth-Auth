
import * as express from 'express';
import routes from './routes'; //routes represents the api router and the auth router

const app = express();

app.use(express.static('public'));
app.use(express.json());  //this is the body parser
app.use(routes);

const port = process.env.Port || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
console.log('You can do it!!')






//Testing code // This has been moved to utils/password.js

// import * as bcrypt from 'bcrypt'; //on server side it is recommended to do async development
// //generateHash('password123'); don't want to store the password in the database it needs to be hashed
// function generateHash(password){
//     const salt = bcrypt.genSaltSync(12);  //this generates our salt with 12 rounds
//     const hash = bcrypt.hashSync(password, salt); //the string we are trying to hash which is the plain text password with our random data (salt)
//     return hash;
// }

// function compareHash(password, hashed) {
//     return bcrypt.compareSync(password, hashed);
// }

// // console.log(generateHash('password123'));
// // //$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne



// console.log(compareHash('password123', '$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne'))