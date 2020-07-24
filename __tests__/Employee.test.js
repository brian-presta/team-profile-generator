const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Robert','Manager','4','robert@email.com')

    expect(employee.name).toBe('Robert')
    expect(employee.title).toBe('Manager')
    expect(employee.employeeID).toBe('4')
    expect(employee.email).toBe('robert@email.com')
})