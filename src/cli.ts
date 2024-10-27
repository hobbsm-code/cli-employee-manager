import inquirer from 'inquirer';
import * as db from './dbFunctions.js';
import { QueryResult } from 'pg';

const mainMenuOptions = [
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'View Employees by Manager',
    'View Employees by Department',
    'View Total Utilized Budget by Department',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Update an Employee Manager',
    'Delete a Department',
    'Delete a Role',
    'Delete an Employee',
    'Quit',
];

function userPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: mainMenuOptions,
    }).then((answers) => {
        selectMainMenuAction(answers.action);
    });
}

async function selectMainMenuAction(action: string) {
    switch (action) {
        case 'View All Departments':
            const departments = await db.getDepartments();
            if (departments) {
                displayResults(departments);
            } else {
                console.error('Failed to retrieve departments');
            }
            break;
        case 'View All Roles':
            const roles = await db.getRoles();
            if (roles) {
                displayResults(roles);
            } else {
                console.error('Failed to retrieve roles');
            }
            break;
        case 'View All Employees':
            const employees = await db.getEmployees();
            if (employees) {
                displayResults(employees);
            } else {
                console.error('Failed to retrieve employees');
            }
            break;
        case 'View Employees by Manager':
            viewEmployeesByManager();
            break;
        case 'View Employees by Department':
            viewEmployeesByDepartment();
            break;
        case 'View Total Utilized Budget by Department':
            viewTotalUtilizedBudgetByDepartment();
            break;
        case 'Add a Department':
            addDepartment();
            break;
        case 'Add a Role':
            addRole();
            break;
        case 'Add an Employee':
            addEmployee();
            break;
        case 'Update an Employee Role':
            updateEmployeeRole();
            break;
        case 'Update an Employee Manager':
            updateEmployeeManager();
            break;
        case 'Delete a Department':
            deleteDepartment();
            break;
        case 'Delete a Role':
            deleteRole();
            break;
        case 'Delete an Employee':
            deleteEmployee();
            break;
        case 'Quit':
            process.exit(0);
        default:
            console.error('Unknown action');
            break;
    }
}

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the department:',
    }).then((answers) => {
        db.addDepartment(answers.departmentName);
        console.log('Department added\n=====================\n');
        userPrompt();
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:',
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the role:',
        },
    ]).then((answers) => {
        db.addRole(answers.title, answers.salary, answers.departmentId);
        console.log('Role added\n=====================\n');
        userPrompt();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the employee\'s first name:',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the employee\'s last name:',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee:',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID for the employee:',
        },
    ]).then((answers) => {
        db.addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId);
        console.log('Employee added\n=====================\n');
        userPrompt();
    });
}

function deleteDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID:',
        },
    ]).then((answers) => {
        db.deleteDepartment(answers.departmentId);
        console.log('Department deleted\n=====================\n');
        userPrompt();
    });
}

function deleteRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID:',
        },
    ]).then((answers) => {
        db.deleteRole(answers.roleId);
        console.log('Role deleted\n=====================\n');
        userPrompt();
    });
}

function deleteEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID:',
        },
    ]).then((answers) => {
        db.deleteEmployee(answers.employeeId);
        console.log('Employee deleted\n=====================\n');
        userPrompt();
    });
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID:',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the new role ID:',
        },
    ]).then((answers) => {
        db.updateEmployeeRole(answers.employeeId, answers.roleId);
        console.log('Employee role updated\n=====================\n');
        userPrompt();
    });
}

function updateEmployeeManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID:',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the new manager ID:',
        },
    ]).then((answers) => {
        db.updateEmployeeManager(answers.employeeId, answers.managerId);
        console.log('Employee manager updated\n=====================\n');
        userPrompt();
    });
}

function viewEmployeesByManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID:',
        },
    ]).then(async (answers) => {
        const employees = await db.getEmployeesByManager(answers.managerId);
        if (employees) {
            displayResults(employees);
        } else {
            console.error('Failed to retrieve employees');
        }
    });
}

function viewEmployeesByDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID:',
        },
    ]).then(async (answers) => {
        const employees = await db.getEmployeesByDepartment(answers.departmentId);
        if (employees) {
            displayResults(employees);
        } else {
            console.error('Failed to retrieve employees');
        }
    });
}

function viewTotalUtilizedBudgetByDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID:',
        },
    ]).then(async (answers) => {
        const employees = await db.getTotalUtilizedBudget(answers.departmentId);
        if (employees) {
            displayResults(employees);
        } else {
            console.error('Failed to retrieve employees');
        }
    });
}   

function displayResults(result: QueryResult) {
    console.table(result.rows);
    userPrompt();
}

userPrompt();