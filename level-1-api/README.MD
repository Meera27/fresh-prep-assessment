# Fresh Prep Assessment - Level 1

This project implements a REST API server for user operations as specified in the Fresh Prep Skills Test.

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. Run `npm test` to run the unit tests

## Endpoints

- GET /id: Returns a universally unique identifier
- GET /user: Returns user details (with a 300ms delay)
- POST /user: Simulates creating a user (50% chance of success/failure)

## Technologies Used

- Node.js
- Express.js
- Jest for testing
- UUID for generating unique identifiers

## Project Structure

- `src/`: Contains the source code
  - `controllers/`: Contains the logic of call back function of rest api's
  - `routes/`: Contains the route definitions
  - `utils/`: Contains utility functions
  - `app.js`: Sets up the Express application
  - `server.js`: Starts the server
- `tests/`: Contains the unit tests

## Testing

This project uses Jest for unit testing. To run the tests:

1. Ensure all dependencies are installed: `npm install`
2. Run the test command: `npm test`
   This will run all tests in the `tests/` directory.

To view test coverage, you can run: `npm test -- --coverage`
This will display a coverage report in the console and generate a detailed HTML report in the `coverage/` directory.

## Notes

- The server runs on port 3000 by default. You can change this by setting the PORT environment variable.
- The project uses ES6 modules and modern JavaScript features.
