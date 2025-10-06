describe('Fake Store Products API Test', () => {

it ("GET all products", () => {
    cy.request('https://fakestoreapi.com/products')
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");

        cy.log('Status Code: ' + response.status);
    });
});

it ('ADD new product', () => {
    cy.request("POST", 'https://fakestoreapi.com/products', {
    title: "Product 1",
    price: 15,
    description: "Testing Product",
    category: "Apparel",
    image: "https://example.com"
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.title).to.eq("Product 1");

        cy.log('Status Code: ' + response.status);
        cy.log('New Product ID: ' + response.body.id);
        });
    });

    it ('UPDATE added product', () => {
    cy.request("PUT", 'https://fakestoreapi.com/products/1', {
    title: "Product 1 Updated",
    price: 25,
    description: "Testing Product",
    category: "Apparel",
    image: "https://example.com"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.price).to.eq(25);

        cy.log('Product Updated Title: ' + response.body.title);
        cy.log('Product Updated Price: ' + response.body.price);
        });
    });

    it ('DELETE added product', () => {
    cy.request("DELETE", 'https://fakestoreapi.com/products/1')
    .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Status Code: ' + response.status);
        });
    });
});


