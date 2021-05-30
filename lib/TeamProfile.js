const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generateTeamRoster = require('../src/generateTeamRoster');

class TeamProfile {
  employees = [];

  constructor() {
    inquirer.prompt(
      [
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
          validate: managerNameInput => {
            if (managerNameInput.trim() !== '') {
              return true;
            }
            return 'Manager name cannot be blank.';
          }
        },
        {
          type: 'input',
          name: 'managerId',
          message: "Manager's employee ID:",
          validate: managerIdInput => {
            if (managerIdInput.trim() !== '') {
              return true;
            }
            return 'Manager ID is required.';
          }
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "Manager's email address:",
          validate: managerEmailInput => {
            if (managerEmailInput.trim() !== '' && managerEmailInput.indexOf('@') !== -1) {
              return true;
            }
            return 'A valid email address is required.';
          }
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "Manager's office number:",
          validate: managerIdInput => {
            if (managerIdInput.trim() !== '') {
              return true;
            }
            return 'Office number is required.';
          }
        },
        {
          type: 'list',
          name: 'whatNext',
          message: "What would you like to do next?",
          choices: ['Add a team member', 'Finish building team'],
          default: 'Add a team member'
        }
      ]
    )
    .then(answers => {
      // console.log(answers);
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
      this.employees.push(manager);

      if (answers.whatNext === 'Add a team member') {
        this.addTeamMember();
      } else {
        this.generateProfile();
      }
    });
  }

  addTeamMember() {
    console.log('\nAdd Team Member');
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'role',
          message: "What type of employee would you like to add?",
          choices: ['Engineer', 'Intern']
        },
        {
          type: 'input',
          name: 'name',
          message: "Employee name:",
          validate: nameInput => {
            if (nameInput.trim() !== '') {
              return true;
            }
            return 'Name cannot be blank.';
          }
        },
        {
          type: 'input',
          name: 'id',
          message: "Employee ID:",
          validate: idInput => {
            if (idInput.trim() !== '') {
              return true;
            }
            return 'ID is required.';
          }
        },
        {
          type: 'input',
          name: 'email',
          message: "Email address:",
          validate: emailInput => {
            if (emailInput.trim() !== '' && emailInput.indexOf('@') !== -1) {
              return true;
            }
            return 'A valid email address is required.';
          }
        },
        {
          type: 'input',
          name: 'github',
          message: "GitHub username:",
          when(answers) {
            return answers.role === 'Engineer';
          }
        },
        {
          type: 'input',
          name: 'school',
          message: "Intern's school:",
          when(answers) {
            return answers.role === 'Intern';
          }
        },
        {
          type: 'list',
          name: 'whatNext',
          message: "What would you like to do next?",
          choices: ['Add another team member', 'Finish building team'],
          default: 'Add another team member'
        }
      ]
    )
    .then(answers => {
      // console.log(answers);

      if (answers.role === 'Engineer') {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        this.employees.push(engineer);
      } else if (answers.role === 'Intern') {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        this.employees.push(intern);
      }

      if (answers.whatNext === 'Add another team member') {
        this.addTeamMember();
      } else {
        this.generateProfile();
      }
    });
    return;
  }

  generateProfile() {
    const teamHtml = generateTeamRoster(this.employees);
    fs.writeFileSync('./dist/index.html', teamHtml);
    fs.copyFileSync('./src/style.css', './dist/style.css');
  }
}

module.exports = TeamProfile;