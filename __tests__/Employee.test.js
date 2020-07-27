const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Robert','4','robert@email.com')

    expect(employee.name).toBe('Robert')
    expect(employee.role).toBe('Employee')
    expect(employee.employeeID).toBe('4')
    expect(employee.email).toBe('robert@email.com')
})

test('creates HTML content  with the startCard method', () => {
    const employee = new Employee('Robert','4','robert@email.com')
    const card = employee.startCard('')
    expect(card).toContain(employee.name)
    expect(card).toContain(employee.role)
    expect(card).toContain(employee.employeeID)
    expect(card).toContain(employee.email)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})