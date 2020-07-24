const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Robert','2','robert@email.com','2')

    expect(manager.name).toBe('Robert')
    expect(manager.role).toBe('Manager')
    expect(manager.employeeID).toBe('2')
    expect(manager.email).toBe('robert@email.com')
    expect(manager.officeNumber).toBe('2')
})

test('creates HTML content  with the makeCard method', () => {
    const manager = new Manager('Robert','2','robert@email.com','2')

    expect(manager.makeCard()).toContain(manager.name)
    expect(manager.makeCard()).toContain(manager.role)
    expect(manager.makeCard()).toContain(manager.employeeID)
    expect(manager.makeCard()).toContain(manager.email)
    expect(manager.makeCard()).toContain(manager.officeNumber)
    expect(manager.makeCard()).toContain('<div class')
    expect(manager.makeCard()).toContain('<ul class')
    expect(manager.makeCard()).toContain('<li class')
})