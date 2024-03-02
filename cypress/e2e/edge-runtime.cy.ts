describe('Edge Runtime Support', () => {
    it('should fetch using Edge runtime and show Magikarp', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#edge-runtime').click()
      cy.url().should('include', '/edge-function')
      cy.get('p').contains('magikarp')
    })
  })