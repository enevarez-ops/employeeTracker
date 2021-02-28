const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: process.env.DB_USER,

  // Your password
  password: process.env.DB_PW,
  database: "employeeTracker_DB",
});


module.exports = connection;
