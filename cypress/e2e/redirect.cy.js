describe('next.config.js Redirect Support', () => {
    it('should redirect to URL /redirected', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#redirect').click()
      cy.url().should('include', '/redirected')
    })
  })