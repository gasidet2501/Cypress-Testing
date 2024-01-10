describe("Login Test", () => {
  it("should log in successfully with correct credentials", () => {
    cy.visit(
      "https://practicetestautomation.com/practice-test-login/?fbclid=IwAR38SDE483gwEJBlOOg6e9CAigjLZPbmRM1na4i0Tc8nHnyQ-D7iPqierGE"
    );

    // Input username and password
    cy.get("[id='username']").type("student");
    cy.get("[id='password']").type("Password123");

    //   // Click the login button
    //   cy.get("[id='submit']").click();

    //   // Assert that login is successful (you may need to adjust this based on your website)
    //   cy.url().should('include', '/dashboard');
  });

  //     it('should display an error message with incorrect credentials', () => {
  //       cy.visit('https://your-website.com/login');

  //       // Input incorrect username and password
  //       cy.get('#username').type('incorrect_username');
  //       cy.get('#password').type('incorrect_password');

  //       // Click the login button
  //       cy.get('#login-button').click();

  //       // Assert that an error message is displayed (you may need to adjust this based on your website)
  //       cy.get('.error-message').should('be.visible');
  //     });
});
