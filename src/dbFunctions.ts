import { pool, connectToDb } from './connection.js';

await connectToDb();

export async function getDepartments() {
  const sql = `SELECT id, name FROM department`;
  return await executeQuery(sql);
};

export async function getRoles() {
  const sql = `SELECT id, title, salary, department_id FROM role`;
  return await executeQuery(sql);
}

export async function getEmployees() {
  const sql = `SELECT id, first_name, last_name, role_id, manager_id FROM employee`;
  return await executeQuery(sql);
}

export async function getEmployeesByManager(managerId: number) {
  const sql = `SELECT id, first_name, last_name, role_id, manager_id FROM employee WHERE manager_id = $1`;
  return await executeQuery(sql, [managerId]);
}

export async function getEmployeesByDepartment(departmentId: number) {
  const sql = `SELECT id, first_name, last_name, role_id, manager_id FROM employee WHERE role_id IN (SELECT id FROM role WHERE department_id = $1)`;
  return await executeQuery(sql, [departmentId]);
}

export async function getTotalUtilizedBudget(departmentId: number) {
  const sql = `SELECT SUM(salary) FROM role WHERE department_id = $1`;
  return await executeQuery(sql, [departmentId]);
}

export async function addDepartment(departmentName: string) {
    const sql = `INSERT INTO department (name) VALUES ($1)`;
    return await executeQuery(sql, [departmentName]);
}

export async function addRole(title: string, salary: number, departmentId: number) {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`;
    return await executeQuery(sql, [title, salary, departmentId]);
}

export async function addEmployee(firstName: string, lastName: string, roleId: number, managerId?: number) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`;
    return await executeQuery(sql, [firstName, lastName, roleId, managerId || null]);
}

export async function updateEmployeeRole(employeeId: number, roleId: number) {
    const sql = `UPDATE employee SET role_id = $1 WHERE id = $2`;
    return await executeQuery(sql, [roleId, employeeId]);
}

export async function updateEmployeeManager(employeeId: number, managerId: number) {
    const sql = `UPDATE employee SET manager_id = $1 WHERE id = $2`;
    return await executeQuery(sql, [managerId, employeeId]);
}

export async function deleteDepartment(departmentId: number) {
    const sql = `DELETE FROM department WHERE id = $1`;
    return await executeQuery(sql, [departmentId]);
}

export async function deleteRole(roleId: number) {
    const sql = `DELETE FROM role WHERE id = $1`;
    return await executeQuery(sql, [roleId]);
}

export async function deleteEmployee(employeeId: number) {
    const sql = `DELETE FROM employee WHERE id = $1`;
    return await executeQuery(sql, [employeeId]);
}

async function executeQuery(sql: string, params?: any[]) {
  try {
    const result = await pool.query(sql, params);
    return result;
    } catch (err) {
    console.error('Error executing query:', err);
    } 
}
