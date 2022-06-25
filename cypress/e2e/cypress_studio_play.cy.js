describe('Cypress Studio Play', () => {
  before(()=> {
    // Assumes, e.g. "baseUrl": "http://127.0.0.1:5500" set in cypress.json
    cy.visit('index.html'); 
    // Or
    // cy.visit('/');     
  });

  it('Begin Transactions', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#FamilyName').clear();
    cy.get('#FamilyName').type('smith');
    cy.get('#FamilyName').should('have.value', 'smith');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#DeliveryInstructions').click();
    cy.get('#DeliveryInstructions').type('Cool');
    cy.get('#DeliveryInstructions').should('have.value', 'Cool');
    /* ==== End Cypress Studio ==== */
  }); 

  it('new stuff', () => {
  });
});