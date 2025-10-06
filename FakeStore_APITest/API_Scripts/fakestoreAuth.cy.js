  describe("Authorization API Test", () => {
    it("Login user", () => {
      cy.request("POST", 'https://fakestoreapi.com/auth/login', {
        username: "mor_2314",
        password: "83r5^_"
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("token");

        cy.log('Token: ' + response.body);
      });
    });
  });