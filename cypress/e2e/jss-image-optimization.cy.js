describe('Sitecore JS Image Optimization with NextImage Component', () => {
    it('should optimize images that use NextImage component', () => {
        cy.visit(Cypress.env('url'));

        cy.get('#jss-image-optimization').click()
        cy.wait(300)
        cy.get('#optimized').then(($optimizedSize) => {
            const optimizedSize = parseInt($optimizedSize.text());
            expect(optimizedSize).to.be.greaterThan(0);
            cy.get('#original').then(($originalSize) => {
                    expect(parseInt($originalSize.text())).to.be.greaterThan(optimizedSize)
            })
        })
    })
})