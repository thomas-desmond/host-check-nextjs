describe('Middleware Support', () => {
    it('should support middleware redirect', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#middleware').click();
        cy.url().should('include', 'SUCCESS');
    })
})