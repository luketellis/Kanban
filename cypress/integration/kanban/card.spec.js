/// <reference types="cypress" />

describe("can add new card", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("card number is incremented by 1 when new card added", () => {
    cy.get(".card")
      .then(($elements) => {
        return $elements.length;
      })
      .then((cardCount) => {
        cy.addCard();
        cy.get(".card").should("have.length", cardCount + 1);
      });
  });
});
