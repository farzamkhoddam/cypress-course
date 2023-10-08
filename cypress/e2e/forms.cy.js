describe("test form page", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("test form", () => {
    cy.get("[data-test='form-input']").type("test@gmail.com");
    cy.get("[data-test = 'from-submit']").click();
    cy
      .contains(/Successfully subbed:/i)
      .wait(3000)
      .should("not.exist");
    cy.get("[data-test='form-input']").type("this is not an email");
    cy.get("[data-test = 'from-submit']").click();
    cy.contains(/Invalid email:/i)
      .wait(3000)
      .should("not.exist");
      cy.getDataTest("from-submit").click()
      cy.contains("fail!");
  });
});
