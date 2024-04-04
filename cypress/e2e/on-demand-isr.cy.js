describe('On Demand ISR Support', () => {
    it('should support On Demand ISR', () => {
        cy.visit(Cypress.env('url'));
        cy.get('#on-demand-isr').click();

        cy.url().should('include', '/on-demand-isr');
        let beforeISR = cy.get('p').invoke('text').as('beforeISR');
        cy.get('@beforeISR').then((beforeISR) => {
            const beforeFirstSlash = beforeISR.split('/')[0];
            cy.request(Cypress.env('url') + 'api/revalidate-isr');
            cy.wait(1500);
            cy.visit(Cypress.env('url'));
            cy.get('#on-demand-isr').click();
            cy.url().should('include', '/on-demand-isr');
            cy.get('p').invoke('text').should('not.equal', beforeFirstSlash);
        })
    })
})