//Testing code
import * as bcrypt from 'bcrypt'; //on server side it is recommended to do async development

//generateHash('password123'); don't want to store the password in the database it needs to be hashed
export function generateHash(password){
    const salt = bcrypt.genSaltSync(12);  //this generates our salt with 12 rounds
    const hash = bcrypt.hashSync(password, salt); //the string we are trying to hash which is the plain text password with our random data (salt)
    return hash;
}

export function compareHash(password, hashed) {
    return bcrypt.compareSync(password, hashed);
}

// console.log(generateHash('password123'));
//$2b$12$PhqyNTrsAk/m/lRk9Awv9.wXmrs6B/kPoRiaaZh.mC5/BaQPtmDaq

// console.log(compareHash('password123', '$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne'))



