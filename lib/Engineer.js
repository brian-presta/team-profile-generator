const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,employeeID,email,gitHub) {
        super(name,employeeID,email);
        this.role = 'Engineer';
        this.gitHub = gitHub;
    };
    makeCard() {
        return this.startCard(`GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</a>`)
    }
};

module.exports = Engineer;