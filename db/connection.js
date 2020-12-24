
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "Sofia0602!",
  database: "employeeTracker_DB",
});

connection.connect()

connection.query = util.promisify(connection.query);

module.exports = connection;
