describe('Adding product to the nopCommerce website cart', () => {
      
    beforeEach(() => {
        cy.visit('http://localhost:8081/');
    });
    it('should be able to add products to the cart', () => {

    cy.get('#small-searchterms').type('Laptop{enter}')
    cy.contains('Add to cart').first().click()

    cy.get('.cart-label').click()
    
    // Assertion 
    cy.get('.product-name').should('contain.text', 'Laptop')
  })
})  
