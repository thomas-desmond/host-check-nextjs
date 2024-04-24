describe('Incremental Static Regeneration Support', () => {
    it('should support ISR', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#incremental-static-regeneration').click();
        cy.url().should('include', '/incremental-static-regeneration');
        let beforeISR = cy.get('p').invoke('text').as('beforeISR');
        cy.get('@beforeISR').then((beforeISR) => {
            const beforeFirstSlash = beforeISR.split('/')[0];
            cy.wait(62000);
            cy.reload();
            cy.get('p').invoke('text').should('equal', beforeFirstSlash);
            cy.wait(2000);
            cy.reload();
            cy.get('p').invoke('text').should('not.equal', beforeFirstSlash);
        })
    })
})