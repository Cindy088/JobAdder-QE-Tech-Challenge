# SauceDemo UI Automation with Playwright

## Overview

This project demonstrates a UI Automation test using Playwright to automate the SauceDemo website. The tests cover scenarios like logging in with valid and invalid credentials, adding items to the cart, and verifying the items in the cart.

## Features

- **Login with invalid credentials**: Verifies the error messages when invalid credentials are used.
- **Login with valid credentials**: Logs in successfully and redirects to the inventory page.
- **Add items to cart**: Dynamically adds items from a data-driven file to the cart.
- **Cross-browser support**: Capable of running tests in multiple browsers like Chrome, Firefox, etc.
- **Reusable functions**: Methods like login and add items are designed using SOLID principles to promote reusability and maintainability.

## Tech Stack

- **Framework**: Playwright
- **Language**: TypeScript
- **Testing Utilities**: Playwright’s built-in assertions and test runner

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Installed on your machine (version >= 14).
- **Playwright**: Installed via npm. You can install it globally or locally in your project.

## Setup Instructions

- Clone this repository:

```bash
git clone https://github.com/your-username/JobAdder-QE-Tech-Challenge.git
cd JobAdder-QE-Tech-Challenge/ui-automation
```

- Install the necessary dependencies:

  ```bash
  npm install

  ```

- Install Playwright browsers:
  ```bash
  npx playwright install
  ```

## Running the Tests

To run the tests, you can use the following npm commands:

- Run All Tests:

  ```bash
  npx playwright test

  ```

- Run Tests in Headed Mode
  By default, tests run in headless mode (no browser UI). To see the browser while tests are running:

  ```bash
  npx playwright test --headed

  ```

- Run Tests in a Specific Browser:

  ```bash
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit

  ```

- View HTML Report
  After running the tests, you can generate and view a detailed HTML report:
  ```bash
  npx playwright show-report
  ```

## Test Data-Driven Feature

The items to be added to the cart are stored in a data file itemsToAdd.ts. You can modify the contents of this file to include any items you'd like to test in the shopping cart.

export const itemsToAdd = [
'sauce-labs-backpack',
'sauce-labs-bike-light',
'sauce-labs-bolt-t-shirt',
'sauce-labs-fleece-jacket',
'sauce-labs-onesie',
'test.allthethings()-t-shirt-(red)',
];

## SOLID Principles Applied

- S: Single Responsibility Principle is followed by dividing responsibilities across different classes (LoginPage, ProductPage, etc.).
- O: Open/Closed Principle allows us to easily extend test cases by adding new test data without modifying existing code.
- L: Liskov Substitution Principle is adhered to by ensuring that all functions can operate with derived classes or mocks in future extensions.
- I: Interface Segregation Principle is maintained with small, purposeful classes.
- D: Dependency Inversion Principle is followed by separating data (like itemsToAdd.ts) and logic into reusable components.

## Improvements

- **Cross-browser Support**: Tests can be extended to run across browsers like Firefox, Webkit, and Edge by modifying the playwright.config.ts.
- **Parallel Execution**: The tests are configured to run in parallel using Playwright’s built-in test runner.
- **Scalability**: The test framework supports adding more pages, test cases, and configurations easily, following best practices.

## License

This project is licensed under the MIT License.
