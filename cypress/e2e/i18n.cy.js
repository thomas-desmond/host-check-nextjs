describe('Sub-Path Internationalization Support', () => {
    it('should include French locale in the URL path', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#i18n').click()
      cy.url().should('include', '/fr/feature/i18n')
      cy.get('p').contains('snorlax')
    })
  })