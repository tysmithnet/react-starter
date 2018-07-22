/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/index.html");
  });

  it("should render hi!", () => {
    cy.get("#root>h1").then(a => {
      const txt = a.text();
      expect(txt).to.be.equals("hi!");
    });
  });
});
