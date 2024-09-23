# JobAdder QE Tech Challenge

This repository contains solutions for the JobAdder QE Tech Challenge. The solutions cover UI Automation, API Automation, SQL Query, and a Recursion Bonus Problem. The challenge is organized into the following structure:

## UI Automation Test

### Objective:

- Website: https://www.saucedemo.com
- Scenario:
  - Login with invalid credentials and verify the error message.
  - Login with valid credentials:
    - User: standard_user
    - Password: secret_sauce
  - After login, add items from a data-driven file to the cart.
  - Navigate to the cart and assert that the items were successfully added.

### Tools & Framework:

- Framework: Playwright
- Language: TypeScript
- Principles Applied: SOLID, DRY, KISS

### Features:

- Data-driven testing: Items from the file itemsToAdd.ts are dynamically added to the cart.
- Cross-browser support: Tests can run on multiple browsers.
- Reusable helper functions for login and adding items to the cart.

### How to Run:

- Clone the repository:

```bash
git clone https://github.com/your-username/JobAdder-QE-Tech-Challenge.git
```

- Navigate to the ui-automation/ folder and install dependencies:

```bash
cd ui-automation
npm install
```

- Install Playwright browsers:

```bash
npx playwright install
```

- Run the tests:

```bash
npx playwright test
```

- View the test report:

```bash
npx playwright show-report
```

## API Automation Test

### Objective:

- API: Weatherbit API
  - Scenario: Automate API testing for the following:
    - Get current weather data for multiple places based on latitude and longitude.
    - Get current weather data for multiple places based on postal codes.

### Instructions:

- The solution is provided in the script.js and README.md with detail steps.
- It includes steps to automate API testing using Postman.
- cURL commands and screenshots are included in the API Automation Test.docx file.

## SQL Query Test

### Objective:

- Write a SQL query to retrieve the population for places in the USA with a population over 12,500.
- Write a SQL query to get the list of products with locations that had transactions in March 2021.

### Instructions:

- The solution for the SQL queries is included in the SQL Query select.sql file.

## Bonus Points - Recursion Problem

### Objective:

- Problem: Given a number, find the sum of its digits using recursion.
- Examples:
  - Input: 12345 → Output: 15
  - Input: 45632 → Output: 20
- Solution:
  - The solution is provided in the index.js file.
