describe('Login to nopCommerce', () => {
      
    beforeEach(() => {
        cy.visit('http://localhost:8081/login');
    });
    it('should complete checkout as registered user', () => {
    //1. Login    
        cy.get('#Email').type('testautomation0702@gmail.com')
        cy.get('#Password').type('Automation@0207')
        cy.get('input[type="checkbox"]').first().should('not.be.checked');
        cy.get('#RememberMe').check()
        cy.contains('button', 'Log in').click()

    //2. Adding product to the cart 
        cy.get('#small-searchterms').type('Laptop{enter}')
        cy.contains('Add to cart').first().click()
        cy.get('.cart-label').click()
    
    //3. Checkout
        cy.get('.product-name').should('contain.text', 'Laptop')
        cy.get('input[type="checkbox"]').first().should('not.be.checked');
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()

    //4. Billing details for checkout
    //button id = edit-billing-address-button
        cy.get('#edit-billing-address-button').click()
        cy.get('#BillingNewAddress_FirstName').clear().type('Test')
        cy.get('#BillingNewAddress_LastName').clear().type('Automation')
        cy.get('#BillingNewAddress_Email').clear().type('testautomation0702@gmail.com')
        cy.get('#BillingNewAddress_CountryId').select('237')         //value for "United States in DOM"
        cy.log('US selected')
        cy.get('#BillingNewAddress_StateProvinceId').select('California')
        cy.log('California selected')
        cy.get('#BillingNewAddress_City').clear().type('San Jose')
        cy.get('#BillingNewAddress_Address1').clear().type('123 Test St')
        cy.get('#BillingNewAddress_ZipPostalCode').clear().type('98101')
        cy.get('#BillingNewAddress_PhoneNumber').clear().type('1234567890')

        cy.get('#billing-buttons-container button[name="save"]', { timeout: 10000 })
        .should('be.visible').click()

        // shipping method
        cy.get('#shipping-method-buttons-container .shipping-method-next-step-button', { timeout: 10000 })
        .should('be.visible').click()

        // payment method
        cy.get('#payment-method-buttons-container .payment-method-next-step-button', { timeout: 10000 })
        .should('be.visible').click()

        // payment info
        cy.get('#payment-info-buttons-container .payment-info-next-step-button', { timeout: 10000 })
        .should('be.visible').click()

        // confirm order
        cy.get('#confirm-order-buttons-container .confirm-order-next-step-button', { timeout: 10000 })
        .should('be.visible').click()

        cy.get('.order-completed').should('contain', 'Your order has been successfully processed!')
    })
})  
