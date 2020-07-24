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

    expect(intern.makeCard()).toContain(intern.name)
    expect(intern.makeCard()).toContain(intern.role)
    expect(intern.makeCard()).toContain(intern.employeeID)
    expect(intern.makeCard()).toContain(intern.email)
    expect(intern.makeCard()).toContain(intern.school)
    expect(intern.makeCard()).toContain('<div class')
    expect(intern.makeCard()).toContain('<ul class')
    expect(intern.makeCard()).toContain('<li class')
})