describe('Sitecore JS Image Optimization with NextImage Component', () => {
    it('should optimize images that use NextImage component', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#jss-image').click()
        cy.get('#original').invoke('text').as('originalSize')
        cy.get('#optimized').should('not.have.value', '0');
        cy.get('#optimized').invoke('text').as('optimizedSize')
        cy.get('@originalSize').then((originalSize) => {
            cy.get('@optimizedSize').then((optimizedSize) => {
                expect(parseInt(originalSize)).to.be.greaterThan(parseInt(optimizedSize))
            })
        })
    })
})