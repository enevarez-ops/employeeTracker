const mysql = require("mysql");
const inquirer = require("inquirer");

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

const runDepartments = () => {



};

const runEmployee = () => {


};

const runEmpRole = () => {


};


connection.connect((err) => {
  if (err) throw err;
  ();
});

