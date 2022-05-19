//this file is the single source of truth of all things configuration in an environment variable

import * as dotenv from 'dotenv';

dotenv.config(); //this will look into the root of my project to find the .env file


export default { //here we are going to use our environment variables
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}