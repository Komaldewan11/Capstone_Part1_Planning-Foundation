describe('Fake Store Cart API Test', () => {

it ("GET all carts", () => {
    cy.request('https://fakestoreapi.com/carts')
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");

        cy.log('Status Code: ' + response.status);
    });
});

it ('ADD new cart', () => {
    cy.request("POST", 'https://fakestoreapi.com/carts', {
    userId: 1,
    products: [{ productId: 1, quantity: 2 }]
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.products[0].quantity).to.eq(2);

        cy.log('Status Code: ' + response.status);
        cy.log("Product Quantity: " + response.body.products[0].quantity);
        });
    });

    it ('UPDATE cart', () => {
    cy.request("PUT", 'https://fakestoreapi.com/carts/1', {
    userId: 1,
    products: [{ productId: 1, quantity: 8 }]
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.products[0].quantity).to.eq(8);

        cy.log("Product Updated Quantity: " + response.body.products[0].quantity);
        });
    });

    it ('DELETE added cart', () => {
    cy.request("DELETE", 'https://fakestoreapi.com/carts/1')
    .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Status Code: ' + response.status);
        });
    });
});


