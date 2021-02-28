const inquirer = require("inquirer");
require('console.table')
const db = require("./db/connection");

connection.connect((err) => {
  if (err) throw err;
  employeeTracker()
})


require("console.table");
 function employeeTracker() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all Employees?",
          value: "allEmployees",
        },
        {
          name: "View all Roles?",
          value: "allRoles",
        },
        {
          name: "View all Departments?",
          value: "allDepartments",
        },
        {
          name: "Add a Department?",
          value: "addDepartment",
        },
        {
          name: "Add a Role?",
          value: "addRole",
        },
        {
          name: "Add an Employee?",
          value: "addEmployees",
        },
        {
          name: "Update and Employee?",
          value: "updateEmployee",
        },
        {
          name: "Any more updates?",
          value: "end",
        }
      ]
    }
  ]).then(({choice}){
    switch (choice) {
      case "allEmployees":
        return runEmployee();
      case "allRoles":
        return runEmpRole();
      case "allDepartments":
        return runDepartments();
      case "addDepartment":
        return addDepartment();
      case "addRole":
        return addRole();
      case "addEmployees":
        return addEmployee();
      case "updateEmployee":
        return updateEmployeeRole();  
      default: 
      return end();
    }
  });
}
function end() {
  console.log("BYE!!!");
  process.exit();
};
const runDepartments = () => {
  connection.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    console.table(res)
    employeeTracker();
  })
};

const runEmployee = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    employeeTracker()
  })
};

const runEmpRole = () => {
  connection.query("SELECT * FROM empRole", (err, res) => {
    if (err) throw err;
    console.table(res);
    employeeTracker();
  })
};

// const addDepartment = () => {console.log("here")};

// const addEmployee = () => {console.log("here")};

// const addRole = () => {console.log("here")};

// const updateEmployeeRole = () => {console.log("here")};

employeeTracker();
