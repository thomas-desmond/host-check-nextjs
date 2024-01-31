describe('getStaticProps() Support', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/')
 
    cy.get('#static').click()
    cy.url().should('include', '/static')
    cy.get('p').contains('charmander')
  })
})