describe('Profile Page', () => {
    it('Displays user profile information and QR code', () => {
        // Visit the profile page (replace with a sample user address)
        cy.visit('/profile/<test-user-address>');

        // Confirm the user’s details
        cy.contains('Name: Alice');
        cy.contains('Role: Employee');

        // Confirm QR code is displayed
        cy.get('canvas').should('exist');
    });
});