describe('Fake Store Users API Test', () => {

it ("GET all users", () => {
    cy.request('https://fakestoreapi.com/users')
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");

        cy.log('Status Code: ' + response.status);
    });
});

it ('ADD new user', () => {
    cy.request("POST", 'https://fakestoreapi.com/users', {
    email: "apitest@gmail.com",
    username: "apitesting",
    password: "password0929",
    name: { firstname: "John", lastname: "Davis" },
    address: {
      city: "NYC",
      street: "Main",
      number: 1,
      zipcode: "19296"
    },
    phone: "123-456-7890"
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");

        cy.log('Status Code: ' + response.status);
        cy.log("Response: " + JSON.stringify(response.body));
        });
    });

    it ('UPDATE user', () => {
    cy.request("PUT", 'https://fakestoreapi.com/users/1', {
        username: "apitest",
        email: "apitesting@gmail.com",
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.username).to.eq("apitest");
        expect(response.body.email).to.eq("apitesting@gmail.com");

        cy.log("Response: " + JSON.stringify(response.body));
        cy.log("UserName: " + response.body.username);
        cy.log("User emailId: " + response.body.email);
        });
    });

    it ('DELETE added user', () => {
    cy.request("DELETE", 'https://fakestoreapi.com/users/1')
    .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Status Code: ' + response.status);
        });
    });
});


