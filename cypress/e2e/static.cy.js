describe('getStaticProps() Support', () => {
  it('should navigate to the about page', () => {
    cy.visit(Cypress.env('url'))
 
    cy.get('#static').click()
    cy.url().should('include', '/static')
    cy.get('p').contains('charmander')
  })
})