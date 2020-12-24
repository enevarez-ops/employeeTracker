const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findEmployee() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN empRole on employee.role_id = role.id LEFT JOIN departments on empRole.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
    );
  }

  findDepartment() {
    return this.connection.query("SELECT * departments");
  }
  findRoles() {
    return this.connection.query("SELECT * empRole");
  }
  createEmployee() {}
  createDepartment() {
    return this.connection.query;
  }
  createRole() {}
  updateEmployee() {}
}
