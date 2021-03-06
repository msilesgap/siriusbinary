// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('requestsCount', (alias) =>
  cy
    .wrap()
    .then(() => cy.state('requests').filter(req => req.alias === alias).length),
);

Cypress.Commands.add('shouldBeCalled', (alias, timesCalled) => {
    expect(
      cy.state('requests').filter(call => call.alias === alias),
      `${alias} should have been called ${timesCalled} times`
    ).to.have.length(timesCalled);
  });