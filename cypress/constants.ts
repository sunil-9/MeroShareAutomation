type userDataType = Array<{
  name: string; //user name it can by any name for your reference
  company: RegExp; // company name or first 5 character of company name so that we can identify the company
  appliedKitta: string; // number of kitta you want to apply
  crnNumber: string; // crn number of the company
  transactionPIN: string; // transaction pin of the bank
  bankName: RegExp; // bank name or first 5 character of bank name so that we can identify the bank
  filed: string; // First input field of your meroshare login page you can use either number like 17600 for garima capital limited or you can simply use the name of the company
  userid: string; // user id of the meroshare
  password: string; // password of the meroshare
}>;
export const DataUser: userDataType = [
  // my data
  {
    name: "user name",
    company: /LAGHUBITTA BITTIYA/i,
    appliedKitta: "10",
    crnNumber: "123123",
    transactionPIN: "1231",
    bankName: /GARIMA BIKAS/i,
    filed: "17600",
    userid: "12341234",
    password: "123123@321",
  },

];
