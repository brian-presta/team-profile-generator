const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Robert','Manager','4','robert@email.com')

    expect(employee.name).toBe('Robert')
    expect(employee.title).toBe('Manager')
    expect(employee.employeeID).toBe('4')
    expect(employee.email).toBe('robert@email.com')
})

test('creates HTML content  with the startCard method', () => {
    const employee = new Employee('Robert','Manager','4','robert@email.com')

    expect(employee.startCard('')).toContain(employee.name)
    expect(employee.startCard('')).toContain(employee.title)
    expect(employee.startCard('')).toContain(employee.employeeID)
    expect(employee.startCard('')).toContain(employee.email)
    expect(employee.startCard('')).toContain('<div class')
    expect(employee.startCard('')).toContain('<ul class')
    expect(employee.startCard('')).toContain('<li class')
})