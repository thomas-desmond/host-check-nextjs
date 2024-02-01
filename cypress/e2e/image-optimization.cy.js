describe('Image Optimization with Next/Image', () => {
    it('should optimize images that use Next/Image component', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#image-optimization').click()
        cy.get('#original').invoke('text').as('originalSize')
        cy.get('#optimized').invoke('text').as('optimizedSize')
        cy.get('@originalSize').then((originalSize) => {
            cy.get('@optimizedSize').then((optimizedSize) => {
                expect(parseInt(originalSize)).to.be.greaterThan(parseInt(optimizedSize))
            })
        })
    })
})