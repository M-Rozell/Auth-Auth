import * as mysql from "mysql";
// import { resolve } from "path";
import config from "../config";

const pool = mysql.createPool(config.db)
//     {
//     host: 'localhost',
//     user: 'auth_demo',
//     password: 'auth_demo',
//     database: 'the_key_to_auth'
// }

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

import users from './queries/users';

export default {
    users
}