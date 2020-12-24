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
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
  createDepartment(department) {
    return this.connection.query("INSERT INTO departments SET ?", department);
  }
  createRole(role) {
    return this.connection.query("INSERT INTO empRole SET ?", role);
  }
  updateEmployee(roleId, empId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, empId]
    );
  }
}
