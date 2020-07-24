const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,employeeID,email,officeNumber) {
        super(name,employeeID,email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };
    makeCard() {
        return this.startCard(`Office Number: ${this.officeNumber}`)
    };
};

module.exports = Manager;
