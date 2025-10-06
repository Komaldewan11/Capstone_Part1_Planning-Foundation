describe('NopCommerce Accessibility Check', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:8081/');
    
        // Step 2: Ensure the page is fully loaded
        cy.document().its('readyState').should('eq', 'complete');
        cy.injectAxe();
      });
    
      it('Should have no detectable accessibility violations on load', () => {
        // Step 4: Run accessibility checks on the whole page
        cy.checkA11y();
      });  
  });