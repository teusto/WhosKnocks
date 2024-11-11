describe('User Registration', () => {
    it('Registers a new user and navigates to profile page', () => {
        cy.visit('/')
        
        cy.get('input[placeholder="Name"]').type('Lara');
        cy.get('input[placeholder="Role"]').type('Employee');

        cy.get('button').contains('Register').click();

        cy.contains('User registered succefully!');
        cy.url().should('includ', '/profile');
    })
})