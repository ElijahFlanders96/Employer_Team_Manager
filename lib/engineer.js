const Employee = require('../lib/employee');

class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    this.github = Github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}


module.exports = Engineer;
