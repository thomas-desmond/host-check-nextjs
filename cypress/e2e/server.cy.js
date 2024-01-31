describe('getServerSideProps() Support', () => {
    it('should show Charizard on the SSR page', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#server').click()
      cy.url().should('include', '/server')
      cy.get('p').contains('charizard')
    })
  })