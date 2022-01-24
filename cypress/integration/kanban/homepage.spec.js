/// <reference types="cypress" />

const expectedTitle = "Kanban Board";

describe("Kanban loads correctly", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("displays Kanban Board heading", () => {
    cy.get("h1").contains(expectedTitle);
  });

  it("displays Kanban Board title", () => {
    cy.title().should("include", expectedTitle);
  });
});
