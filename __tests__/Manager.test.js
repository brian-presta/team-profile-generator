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
    const card = manager.makeCard()
    expect(card).toContain(manager.name)
    expect(card).toContain(manager.role)
    expect(card).toContain(manager.employeeID)
    expect(card).toContain(manager.email)
    expect(card).toContain(manager.officeNumber)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})