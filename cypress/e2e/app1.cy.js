// cypress/e2e/app.spec.js
describe('App', () => {
    it('allows a user to submit text and see it displayed', () => {
      cy.visit('http://localhost:3000');
      
      cy.get('input').type('End-to-End Test');
      cy.get('button').click();
      
      cy.contains('End-to-End Test').should('be.visible');
    });
  });
  