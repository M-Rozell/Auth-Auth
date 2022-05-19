import { Query } from "../";
// import { UsersTable } from "../models";

const find = () => Query('', []) //finding someone's email in our database//select statements always return arrray of objects
//.ts Query<UsersTable[]>
const insert = () => Query(''); //insert or register our users
//.ts Query<MysqlResponse>
export default {
    find,
    insert
}
