describe('Middleware Support', () => {
    it('should support middleware redirect', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#middlware redirect').click();
        cy.url().should('include', 'SUCCESS');
    })
})