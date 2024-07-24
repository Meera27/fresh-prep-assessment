# Fresh Prep User Management - Level 2 Client

This project is a Vue.js client application for User Management system, fulfilling the requirements for Level 2 of the assessment.

## Features

- Creates a new user on page load/reload using Faker.js for random data generation
- Displays the newly created user's details
- Provides a form to manually create new users
- Shows a list of all users in the database
- Implements error handling and displays error messages when necessary
- Uses a loading spinner during API requests

## Setup and Running

1. Ensure Node.js is installed on your system.
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Adjust if your API is on a different port in `.env`, defualt is `3050`
5. Run `npm run dev` to start the development server.

## Dependencies

- Vue 3
- Vite
- Faker.js for generating random user data

## Notes

- Ensure the Level 1 API server is running and accessible at the URL specified in the `.env` file before starting this client application.
- The application uses Faker.js to generate random user data for new user creation.
- Error handling is implemented to display messages when operations fail.
- The application includes a loading spinner to indicate ongoing API requests.
