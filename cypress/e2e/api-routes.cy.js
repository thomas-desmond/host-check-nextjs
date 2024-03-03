describe('API Route Support', () => {
    it('should show Charmander on the page', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#api-route').click()
      cy.url().should('include', '/api-route')
      cy.get('p').contains('charmander')
    })
  })