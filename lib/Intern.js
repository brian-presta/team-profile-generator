const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,employeeID,email,school) {
        super(name,employeeID,email);
        this.role = 'Intern';
        this.school = school;
    };
    makeCard() {
        // makeCard passes the class's unique property (for interns, the school name) into the parent Employee class's startCard method
        return this.startCard(`School: ${this.school}`)
    };
};

module.exports = Intern;
