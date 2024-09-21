SauceDemo Automation Tests

# Overview

This project contains automated tests for the SauceDemo website, written using the Playwright framework. The tests validate key user interactions such as logging in with invalid and valid credentials, adding items to the cart, and verifying that the cart contains the selected items.

# Features

Login Tests: Test for login functionality with both valid and invalid credentials.
Error Message Validation: Verify the error message shown for invalid login attempts.
Dynamic Cart Management: Dynamically add items to the cart, with items sourced from a configurable list.
Cross-Browser Support: Run the tests across multiple browsers supported by Playwright.
Parallel Test Execution: Test cases can be executed in parallel to reduce test execution time.

# Prerequisites

Before you begin, ensure you have met the following requirements:
Node.js: Installed on your machine (version >= 14).
Playwright: Installed via npm. You can install it globally or locally in your project.

# Installation

1. Clone this repository:
   git clone <repository-url>

2. Navigate into the project directory:
   cd saucedemo-playwright-tests

3. Install the necessary dependencies:
   npm install

4. Install Playwright browsers:
   npx playwright install

# Running the Tests

To run the tests, you can use the following npm commands:

1. Run All Tests:
   npx playwright test

2. Run Tests in a Specific Browser:
   npx playwright test --project=chromium
   npx playwright test --project=firefox
   npx playwright test --project=webkit

3. Run Tests with UI:
   To observe the browser actions while the tests are running:
   npx playwright test --headed

4. Run a Specific Test:
   To run a specific test file:
   npx playwright test tests/<test-file-name>.spec.js

# Test Scenarios

Login Tests

Invalid Login: The test attempts to log in with invalid credentials and verifies the error message displayed.
Valid Login: The test logs in with valid credentials and navigates to the products page.

Cart Management

Add Items to Cart: Items from a predefined list are dynamically added to the cart.
Verify Cart Contents: After adding the items, the test navigates to the cart and asserts that all the selected items have been added successfully.

# Test Files Structure

tests/: Contains all the test files.
package.json: Defines the dependencies and scripts for running the tests.
playwright.config.js: Playwright configuration file for defining browser options, test settings, and environments.

Playwright Features Used

Test Isolation: Each test runs independently with a fresh browser state.
Assertions: Using Playwright's expect assertions to validate UI elements.
Cross-browser Testing: Supports Chromium, Firefox, and WebKit.
Parallel Testing: Leverages Playwright’s ability to run tests in parallel for faster execution.

Areas for Improvement

Data-driven Tests: Enhance the project by sourcing test data from external files (e.g., JSON or CSV) for better scalability.
More Test Coverage: Add more test cases for additional functionalities such as checkout and product filtering.
CI/CD Integration: Integrate this test suite with a Continuous Integration service like GitHub Actions, CircleCI, or Jenkins.

Issues & Contributions

Feel free to open issues or submit pull requests for any improvements or bugs you encounter.

License
This project is licensed under the MIT License.
