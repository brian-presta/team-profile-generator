class Employee {
    constructor(name,employeeID,email) {
        this.name = name,
        this.role = 'Employee',
        this.employeeID  = employeeID,
        this.email = email
    };
    // this method constructs a string that describes an HTML card filled out with the class's properties,
    // only the last list item is different between the child classes, the otherProp parameter lets the
    // child class easily configure the last item
    startCard(otherProp) {
        return `
            <div class=" col-12 col-md-4 mb-2">
            <div class="card bg-light">
                <div class="card-header bg-primary text-white">
                    <h3>${this.name}</h3>
                    <h3>${this.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${this.employeeID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">${otherProp}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
};

module.exports = Employee;
