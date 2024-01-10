describe("Login testing", () => {
  it("login succesful", () => {
    cy.visit(
      "https://practicetestautomation.com/practice-test-login/?fbclid=IwAR38SDE483gwEJBlOOg6e9CAigjLZPbmRM1na4i0Tc8nHnyQ-D7iPqierGE"
    );

    // Input username and password
    cy.get("[id='username']").type("student");
    cy.get("[id='password']").type("Password123");

    // Click the login button
    cy.get("[id='submit']").click();

    cy.url()
      .should("include", "/logged-in-successfully")
      .log("Login to the application is succesful");
  });

  it("login fail", () => {
    cy.visit(
      "https://practicetestautomation.com/practice-test-login/?fbclid=IwAR38SDE483gwEJBlOOg6e9CAigjLZPbmRM1na4i0Tc8nHnyQ-D7iPqierGE"
    );

    // Input incorrect username and password
    cy.get("[id='username']").type("student");
    cy.get("[id='password']").type("Password1234");

    // Click the login button
    cy.get("[id='submit']").click();

    cy.url()
      .should("include", "/practice-test-login")
      .log("Login to the application is failed");
  });
});
