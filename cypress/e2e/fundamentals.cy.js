describe("test fundamentals page", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("test header title", () => {
    cy.getDataTest("header-title").should("have.text", "Testing Fundamentals");
  });

  it("should display all accordion contents", () => {
    cy.getDataTest("accordion").each(($accordion, i) => {
      cy.wrap($accordion)
        .getDataTest(`accordion-button-${i}`)
        .click()
        .getDataTest(`accordion-${i}-content`)
        .should("be.visible");
    });
  });
});
