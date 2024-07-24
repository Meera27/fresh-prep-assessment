# Fresh Prep Assessment - Level 1

This project implements a REST API server for user operations as specified in the Fresh Prep Skills Test.

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. Run `npm test` to run the unit tests
5. Run `npm run dev` to start the server in development mode

## Endpoints

- GET /id: Returns a universally unique identifier (expected response time < 50ms)
- GET /user: Returns random user details (expected response time ~300 ms)
- POST /user: Creates a new user (expected to fail 50% of the time)

## Technologies Used

- Node.js
- Express.js
- Jest for testing
- UUID for generating unique identifiers

## Project Structure

- `src/`: Contains the source code
  - `controllers/`: Contains the logic for API endpoints
  - `routes/`: Contains the route definitions
  - `models/`: Contains data models
  - `utils/`: Contains utility functions
  - `db/`: Contains database operations and data
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

## API Documentation

### GET /id

Returns a new UUID.

Response:

```json
{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
}
```

### GET /user

Returns a random user from the database with a 300ms delay.

Response:

```json
{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890",
  "biography": "A software developer with 5 years of experience in web technologies."
}
```

### POST /user

Creates a new user. Has a 50% chance of success.

Request Body:

```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "phone": "987-654-3210",
  "biography": "Marketing specialist with a passion for digital strategies."
}
```

Success Response (201 Created):

```json
{
  "message": "User created successfully",
  "user": {
    "id": "7f8d5a3c-1b9e-4f2a-8c6d-4e7f3a2b1c0d",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "987-654-3210",
    "biography": "Marketing specialist with a passion for digital strategies."
  }
}
```

Failure Response (500 Internal Server Error):

```json
{
  "message": "Failed to create user"
}
```
