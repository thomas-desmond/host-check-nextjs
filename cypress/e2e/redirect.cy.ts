describe('getServerSideProps() Support', () => {
    it('should show Alakazam on the Dynamic Route', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#redirect').click()
      cy.url().should('include', '/redirected')
    })
  })