const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Robert','4','robert@email.com','robert-dev')

    expect(engineer.name).toBe('Robert')
    expect(engineer.role).toBe('Engineer')
    expect(engineer.employeeID).toBe('4')
    expect(engineer.email).toBe('robert@email.com')
    expect(engineer.gitHub).toBe('robert-dev')
})

test('creates HTML content  with the makeCard method', () => {
    const engineer = new Engineer('Robert','4','robert@email.com','robert-dev')

    expect(engineer.makeCard()).toContain(engineer.name)
    expect(engineer.makeCard()).toContain(engineer.role)
    expect(engineer.makeCard()).toContain(engineer.employeeID)
    expect(engineer.makeCard()).toContain(engineer.email)
    expect(engineer.makeCard()).toContain(engineer.gitHub)
    expect(engineer.makeCard()).toContain('<div class')
    expect(engineer.makeCard()).toContain('<ul class')
    expect(engineer.makeCard()).toContain('<li class')
})