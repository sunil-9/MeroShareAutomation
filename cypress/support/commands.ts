// Cypress.Commands.add("dataCy", (value) => {
//   cy.get(`[data-cy=${value}]`);
// });

Cypress.Commands.add("loginMeroShare", ({ filed, userid, password }: any) => {
  cy.get(".select2-selection__rendered").click();
  cy.get(".select2-search__field").type(filed);
  cy.get(".select2-results__option--highlighted").click();
  cy.get("#username").type(userid);
  cy.get("#password").type(password);
  cy.get(".btn").click();
});
Cypress.Commands.add("navigateAsba", () => {
  cy.get(".nav > :nth-child(8) > a").click();
});
Cypress.Commands.add("selectShare", ({ company, bankName }: any) => {
  cy.get(".company-name")
    .contains(company)
    .closest(".company-list")
    .find(".btn-issue")
    .click();
  cy.wait(3000);

  cy.elementExists("select#selectBank").then(($selectBank) => {
    if ($selectBank) {
      cy.get("select#selectBank")
        .contains(bankName)
        .invoke("val")
        .then((value) => {
          console.log(value);
          cy.get("select#selectBank").then(($selectBank) => {
            cy.wrap($selectBank).select(value as string);
          });
        });
    } else {
      cy.log("default bank selected");
    }
  });

  // cy.get("select#selectBank")
  //   .contains(bankName)
  //   .invoke("val")
  //   .then((value) => {
  //     cy.get("select#selectBank").select(value as string);
  //     return value;
  //   });
});
Cypress.Commands.add("elementExists", (selector) => {
  return cy
    .window()
    .then(($window) => $window.document.querySelector(selector));
});
Cypress.Commands.add(
  "applyShare",
  ({ appliedKitta, crnNumber, transactionPIN }: any) => {
    cy.get("#appliedKitta").type(appliedKitta);
    cy.get("#crnNumber").type(crnNumber);
    cy.get("#disclaimer").click();
    cy.contains("button.btn-primary", "Proceed").click();
    cy.get("#transactionPIN").type(transactionPIN);
    cy.elementExists("select#selectBank").then(($selectBank) => {
      if ($selectBank) {
        cy.contains("button.btn-primary", "Apply").click();
      } else {
        cy.log("default bank selected");
      }
    });
  }
);
Cypress.Commands.add("logOut", () => {
  cy.get('a.nav-link.header-menu__link[tooltip="Logout"]').click();
});

Cypress.Commands.add("interceptRequest", (method) => {
  cy.intercept({ method, path: "/api/employees" }, (req) => {
    req.alias = method;
  });
});

export {};
