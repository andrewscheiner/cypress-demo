describe('Home Page', () => {
  it('should load the app', () => {
    cy.visit('/');
    cy.contains('Hello').should('exist');
  });
});