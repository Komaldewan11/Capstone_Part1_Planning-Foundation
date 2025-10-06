describe('Login to nopCommerce', () => {
      
    beforeEach(() => {
        cy.visit('http://localhost:8081/login');
    });
    it('should login with valid credentials', () => {
    cy.get('#Email').type('testautomation0702@gmail.com')
    cy.get('#Password').type('Automation@0207')
    cy.get('input[type="checkbox"]').first().should('not.be.checked');
    cy.get('#RememberMe').check()
    cy.contains('button', 'Log in').click()

    //Assertion
    cy.url().should('include', '/')
    cy.contains('a', 'Log out').should('be.visible')
  })
})