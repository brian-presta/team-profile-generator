const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,employeeID,email,school) {
        super(name,employeeID,email);
        this.role = 'Intern';
        this.school = school;
    };
    makeCard() {
        return this.startCard(`School: ${this.school}`)
    };
};

module.exports = Intern;
