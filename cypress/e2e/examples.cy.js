describe("multi page test", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("navigation test", () => {
    cy.getDataTest("why-us").click().location("pathname").should("equal", "/");
    cy.getDataTest("overview")
      .click()
      .location("pathname")
      .should("equal", "/overview");
    cy.getDataTest("fundamentals")
      .click()
      .location("pathname")
      .should("equal", "/fundamentals");
    cy.getDataTest("forms")
      .click()
      .location("pathname")
      .should("equal", "/forms");
    cy.getDataTest("examples")
      .click()
      .location("pathname")
      .should("equal", "/examples");
    cy.getDataTest("component")
      .click()
      .location("pathname")
      .should("equal", "/component");
    cy.getDataTest("best-practices")
      .click()
      .location("pathname")
      .should("equal", "/best-practices");
  });
  it.only("intercepts", () => {
    cy.intercept("post", "http://localhost:3000/examples", {
      fixture: "example.json",
      
    }).as("button-click");
    cy.getDataTest("post-button").click();
    cy.wait("@button-click");
  });
});
