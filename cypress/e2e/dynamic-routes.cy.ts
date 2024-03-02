describe('getServerSideProps() Support', () => {
    it('should show Alakazam on the Dynamic Route', () => {
      cy.visit(Cypress.env('url'))
   
      cy.get('#dynamic-route').click()
      cy.url().should('include', '/dynamic-route/65')
      cy.get('p').contains('alakazam')
    })
  })