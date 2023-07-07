import { DataUser } from "../constants";
describe("E2E Test", () => {
  let data = DataUser
  beforeEach(() => {
    // cy.task('resetDB');
    // cy.task('seedDB');
    cy.visit("https://meroshare.cdsc.com.np/#/asba");
  });

  //loop through data and apply for each company
  data.forEach((data) => {
    it(`applying mero share for ${data.name}`, () => {
      cy.loginMeroShare({
        filed: data.filed,
        userid: data.userid,
        password: data.password,
      });
      cy.navigateAsba();
      cy.selectShare({
        company: data.company,
        bankName: data.bankName,
      });
      cy.applyShare({
        appliedKitta: data.appliedKitta,
        crnNumber: data.crnNumber,
        transactionPIN: data.transactionPIN,
      });
      //sleep for 5 seconds
      cy.wait(5000);
      // logout
      cy.logOut();
    });
  });
});
