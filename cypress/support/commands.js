Cypress.Commands.add("addCard", (taskTitle = "ABC123", columnNo = 0) => {
  cy.get(".add-btn").eq(columnNo).click();
  cy.get("[placeholder='New Title...']").eq(columnNo).type(taskTitle);
  cy.get(".save-btn").eq(columnNo).click();
});
