import mysql from "mysql2";
   
const db = mysql.createConnection({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b3dd2af6621bb1',
  password: 'dcb28a47',
  database: 'heroku_8c3cf6bcb95366a'
});


export default db;