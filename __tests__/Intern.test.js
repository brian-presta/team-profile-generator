const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Robert','14','robert@email.com','San Francisco State')

    expect(intern.name).toBe('Robert')
    expect(intern.role).toBe('Intern')
    expect(intern.employeeID).toBe('14')
    expect(intern.email).toBe('robert@email.com')
    expect(intern.school).toBe('San Francisco State')
})

test('creates HTML content  with the makeCard method', () => {
    const intern = new Intern('Robert','14','robert@email.com','San Francisco State')
    const card = intern.makeCard()
    expect(card).toContain(intern.name)
    expect(card).toContain(intern.role)
    expect(card).toContain(intern.employeeID)
    expect(card).toContain(intern.email)
    expect(card).toContain(intern.school)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})