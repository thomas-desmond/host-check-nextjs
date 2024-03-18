describe('Image Optimization with Next/Image', () => {
    it('should optimize images that use Next/Image component', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#image-optimization').click()
        cy.get('#original').invoke('text').as('originalSize')
        cy.wait(1000)
        cy.get('#optimized').then(($optimizedSize) => {
            const optimizedSize = parseInt($optimizedSize.text());
            expect(optimizedSize).to.be.greaterThan(0);
            cy.get('#original').then(($originalSize) => {
                expect(parseInt($originalSize.text())).to.be.greaterThan(optimizedSize)
            })
        })
    })
})