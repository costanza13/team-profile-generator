const Employee = require('./Employee');

class Engineer extends Employee {
  github = '';

  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = 'Engineer';
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

}

module.exports = Engineer;
