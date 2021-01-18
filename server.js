const inquirer = require("inquirer");

const db = require("./db");

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
  ]).then(function(answer){
    switch (answer.choice) {
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
function runDepartments() {
  console.log("here")
};

// const runEmployee = () => {console.log("here")};

// const runEmpRole = () => {console.log("here")};

// const addDepartment = () => {console.log("here")};

// const addEmployee = () => {console.log("here")};

// const addRole = () => {console.log("here")};

// const updateEmployeeRole = () => {console.log("here")};

employeeTracker();
