const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,employeeID,email,gitHub) {
        super(name,employeeID,email);
        this.role = 'Engineer';
        this.gitHub = gitHub;
    };
    // makeCard passes the class's unique property (for engineers, the gitHub username) into the parent Employee class's startCard method
    makeCard() {
        return this.startCard(`GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</a>`);
    };
};

module.exports = Engineer;
