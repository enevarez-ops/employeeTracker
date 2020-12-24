const inquirer = require("inquirer");

const db = require("./db");

require("console.table");

const employeeTracker = () => {
  inquirer
    .prompt([
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
        ],
      },
    ])
    .then();
};

const runDepartments = () => {};

const runEmployee = () => {};

const runEmpRole = () => {};

const addDepartment = () => {};

const addEmployee = () => {};

const addRole = () => {};

const updateEmployeeRole = () => {};

employeeTracker();
