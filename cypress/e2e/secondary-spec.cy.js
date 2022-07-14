describe('Secondary - Page tests', () => {
  // Running initializing shared code before each it test.
  before(()=> {
    // Assumes, e.g. "baseUrl": "http://127.0.0.1:5500" set in cypress.json
    cy.visit('index.html'); 
    // Or
    // cy.visit('/');     
  });

  it('Page visit', () => {
    // Assumes, e.g. "baseUrl": "http://127.0.0.1:5500" set in cypress.json
    cy.visit('index.html'); 
  });

  it('Check that text exists on a page', () => {
    cy.contains('Lorem');
  });

  it('Assert that a URL looks good', () => {
    cy.url().should('include', 'index');
  });

  it('Type some test into a form field and check it', () => {
    cy.get('[name="FirstName"')
      .type('Lisa Simpson')
      .should('have.value', 'Lisa Simpson');
  });

});