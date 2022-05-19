import { Query } from "../";
// import { UsersTable } from "../models";


//.ts Query<UsersTable[]>
// const find = (email) => Query('SELECT * FROM users WHERE email = ?', [email]) //finding someone's email in our database//select statements always return arrray of objects

const find = (column, value) =>Query('SELECT * FROM users WHERE ?? = ?', [column, value])


//.ts Query<MysqlResponse>
const insert = () => Query(''); //insert or register our users

export default {
    find,
    insert
}
