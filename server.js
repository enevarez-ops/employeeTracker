const inquirer = require("inquirer");
require('console.table')
const connection = require("./db/connection");

connection.connect((err) => {
  if (err) throw err;
  employeeTracker()
});


// require("console.table");
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
  ]).then(({choice}) => {
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

const addDepartment = () => {
  inquirer.prompt({
    name: "name",
    message: "What department would you like to add?"
  }).then(({ name }) => {
    connection.query("INSERT INTO departments SET ?", { name: name }, (err, res) => {
      if (err) throw err;
      console.log(`${name} was added to departments`)
      employeeTracker();
    })
  })
};

const addEmployee = () => {
  const roles = []
  connection.query("SELECT * FROM empRole", (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      roles.push({
        name: res[i].title,
        value: res[i].id
      })
    }
  })
  inquirer.prompt([
    {
      name: "first_name",
      message: "What is your employee's first name?"
    },
    {
      name: "last_name",
      message: "What is your employee's last name?"
    },
    {
      name: "role",
      message: "what role does this employee belong to?",
      type: "list",
      choices: roles
    }
  ]).then(({ first_name, last_name, role }) => {
    // console.log(first_name, last_name, role)
    connection.query("INSERT INTO employee SET ?", {
      first_name,
      last_name,
      role_id: role
    }, (err, res) => {
      if (err) throw err;
      console.log(`${first_name} was added to your roles`)
      employeeTracker();
    })
  })


};

const addRole = () => {
  const choice = []
  connection.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {

      choice.push({
        name: res[i].name,
        value: res[i].id
      })
    }
  })

  inquirer.prompt([
    {
      name: "title",
      message: "what is the name of the role you would like to add?"
    },
    {
      name: "salary",
      message: "What is this role's salary?"
    }, {
      name: "dep",
      message: "what department does this role belong to?",
      type: "list",
      choices: choice
    }
  ]).then(({ title, salary, dep }) => {
    console.log(title, salary, dep)
    connection.query("INSERT INTO empRole SET ?", {
      title,
      salary,
      department_id: dep
    }, (err, res) => {
      if (err) throw err;
      console.log(`${title} was added to your roles`)
      employeeTracker();
    })
  })
};

const updateEmployeeRole = () => {
  const roles = [];
  const emps = [];
  connection.query("SELECT employee.first_name, role.title FROM employee LEFT JOIN empRole ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      emps.push({
        name: res.first_name,
      })
      roles.push({
        name: res[i].title,
      })
    }
  })

  inquirer.prompt([
    {
      name: "emp",
      message: "Which employee's role would you like to update?",
      type: "list",
      choices: emps
    },
    {
      name: "role",
      message: "what is the updated role?",
      type: 'list',
      choices: roles
    }
  ]).then(answer => {
    console.log(answer)
  })

};

