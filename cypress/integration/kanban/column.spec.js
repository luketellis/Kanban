/// <reference types="cypress" />
import { states } from "../../../src/utils/constants";

const statusArray = states.map((state) => {
  return state.status;
});

describe("columns load correctly", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("displays all columns", () => {
    cy.get(".column").should("have.length", statusArray.length);
  });

  it("column headings have only state values", () => {
    cy.get("h2").each((x) => {
      expect(x.text().trim()).to.be.oneOf(statusArray);
    });
  });
});
