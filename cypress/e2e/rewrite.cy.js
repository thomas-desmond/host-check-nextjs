describe('next.config.js Rewrite Support', () => {
    it('should rewrite to URL /rewritten', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#rewrite').click()
      cy.url().should('include', '/rewrite')
      cy.get('p').contains('Successful URL Rewrite')
    })
  })