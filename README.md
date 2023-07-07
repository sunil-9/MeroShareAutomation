## Mero Share IPO Automation

This is an open-source project that enables you to automate the process of applying for Initial Public Offerings (IPOs) on Mero Share platform for multiple accounts simultaneously. The project utilizes Next.js and Cypress for development and testing purposes.

### Prerequisites

Before using this project, make sure you have the following prerequisites installed:

- Node.js and Yarn package manager
- Git

### Installation

Follow these steps to install and set up the project:

**Step 1:** Clone the repository using the following command:
```
git clone https://github.com/sunil-9/meroshare.git
```

**Step 2:** Install the project dependencies by running the following command:
```
cd meroshare
yarn install
```

**Step 3:** Update your information in the `cypress/constants.ts` file as described below:

```typescript
type userDataType = Array<{
  name: string; // user name, can be any name for your reference
  company: RegExp; // company name or first 5 characters of the company name to identify the company
  appliedKitta: string; // number of kitta you want to apply
  crnNumber: string; // CRN number of the company
  transactionPIN: string; // transaction PIN of the bank
  bankName: RegExp; // bank name or first 5 characters of the bank name to identify the bank
  filed: string; // First input field of your Mero Share login page, you can use either the number (e.g., 17600 for Garima Capital Limited) or the name of the company
  userid: string; // user ID of Mero Share
  password: string; // password of Mero Share
}>;

export const DataUser: userDataType = [
  // Add any number of objects here
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
```

**Step 4:** Run the tests using the following command:
```
yarn cypress:open
```

**Step 5:** A new window will open. Select Chrome as the default browser and click on "e2e testing".

**Step 6:** In the Cypress window, you will find a list of files. Click on `main.cy.ts` and wait for a few seconds.

The script will now automatically apply for all the IPOs from the specified accounts.

### Contribution

Contributions to this project are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/sunil-9/meroshare).

### Disclaimer

Please note that the use of this project for automating IPO applications on Mero Share is subject to the terms and conditions of the Mero Share platform. Use it responsibly and at your own risk.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).