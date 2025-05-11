# Cash Register App

The **Cash Register App** is a simple web application that calculates the change due when a customer makes a purchase. It determines the exact denominations to return based on the cash in the register and displays the result.

## Features

- Calculates the change due for a purchase.
- Displays the denominations of currency to return.
- Handles scenarios such as:
  - Exact payment (no change due).
  - Insufficient funds in the register.
  - Insufficient payment by the customer.
  - Closing the register when all cash is used for change.

## Project Structure
index.html // Main HTML file for the app styles.css // CSS file for styling the app script.js // JavaScript file containing the app logic package.json // Node.js package configuration README.md // Project documentation


## How It Works

1. Enter the amount of cash the customer provides in the input field.
2. Click the "Purchase" button.
3. The app calculates the change due and displays:
   - A message indicating the status (e.g., "INSUFFICIENT_FUNDS", "CLOSED", or "OPEN").
   - A list of denominations returned as change (if applicable).

## Technologies Used

- **HTML**: For the structure of the app.
- **CSS**: For styling the app.
- **JavaScript**: For implementing the cash register logic.

## How to Run

1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to use the app.

## Example Scenarios

- **Exact Payment**: If the customer pays the exact amount, the app displays "No change due - customer paid with exact cash."
- **Insufficient Funds in Register**: If the register doesn't have enough cash to provide change, the app displays "Status: INSUFFICIENT_FUNDS."
- **Change Due**: If the register has enough cash, the app displays the denominations returned as change.

## Lessons Learned

This project demonstrates how to solve complex problems using JavaScript, including:
- Iterating through data structures.
- Handling floating-point precision issues.
- Building a user-friendly interface.

## License

This project is licensed under the ISC License.

