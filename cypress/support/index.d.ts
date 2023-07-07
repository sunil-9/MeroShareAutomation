/// <reference  types="cypress" />

import "./commands";

type Method = "POST" | "GET" | "DELETE";

declare global {
  namespace Cypress {
    interface Chainable {
      // dataCy(value: string): Chainable<Element>;
      navigateAsba(): Chainable<Element>;
      logOut(): Chainable<Element>;
      loginMeroShare({ filed, userid, password }: any): Chainable<Element>;
      selectShare({ company, bankName }: any): Chainable<Element>;
      applyShare({
        appliedKitta,
        crnNumber,
        transactionPIN,
      }: any): Chainable<Element>;
      interceptRequest(method: Method): Chainable<null>;
      elementExists(element: string): Chainable<Subject>;
    }
  }
}
