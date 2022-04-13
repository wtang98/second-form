describe('page items loads', ()=> {
    it('loads form successfully', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = form]')
    })
})

describe('on all 3 correct inputs finds the Donezo message', ()=> {
    it('loads the Donezo message', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = firstNameInput]').type('Wei-Tong')
        cy.get('[data-cy = secondNameInput]').type('Tang')
        cy.get('[data-cy = emailInput]').type('weitongblue@gmail.com')
        cy.get('[data-cy = button]').click()
        cy.get('[data-cy = donezo]')
    })
})

describe('shows only 1 error when 1 input is incorrect and the others are correct', ()=> {
    it('loads first name error only', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = firstNameInput]').type('w')
        cy.get('[data-cy = secondNameInput]').type('Tang')
        cy.get('[data-cy = emailInput]').type('weitongblue@gmail.com')
        cy.get('[data-cy = button]').click()
        cy.get('[data-cy = firstErrorCy]')
        cy.get('[data-cy = secondErrorCy]').should('not.exist');
        cy.get('[data-cy = emailErrorCy]').should('not.exist');
    })
    it('loads second name error only', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = firstNameInput]').type('Wei-Tong')
        cy.get('[data-cy = secondNameInput]').type('w')
        cy.get('[data-cy = emailInput]').type('weitongblue@gmail.com')
        cy.get('[data-cy = button]').click()
        cy.get('[data-cy = firstErrorCy]').should('not.exist');
        cy.get('[data-cy = secondErrorCy]')
        cy.get('[data-cy = emailErrorCy]').should('not.exist');
    })
    it('loads email error only', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = firstNameInput]').type('Wei-Tong')
        cy.get('[data-cy = secondNameInput]').type('Tang')
        cy.get('[data-cy = emailInput]').type('w')
        cy.get('[data-cy = button]').click()
        cy.get('[data-cy = firstErrorCy]').should('not.exist');
        cy.get('[data-cy = secondErrorCy]').should('not.exist');
        cy.get('[data-cy = emailErrorCy]')
    })
})