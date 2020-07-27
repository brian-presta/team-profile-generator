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
    const card = engineer.makeCard()
    expect(card).toContain(engineer.name)
    expect(card).toContain(engineer.role)
    expect(card).toContain(engineer.employeeID)
    expect(card).toContain(engineer.email)
    expect(card).toContain(engineer.gitHub)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})