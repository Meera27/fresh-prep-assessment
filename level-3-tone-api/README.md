# Fresh Prep Assessment - Level 3 - Tone API

This project provides a simple API that returns random tones for users.

## Features

- GET /tone endpoint that randomly returns one of three tones: humorous, ironic, or cynical
- Dockerized application for easy setup and deployment

## Prerequisites

- Docker
- Docker Compose (version 1.29.0 or higher)

## Running the Application

1. Clone this repository.
2. Build and run the application: `docker-compose up --build`
3. Access the API at `http://localhost:9090/tone`

To stop the application, press Ctrl+C or run: `docker-compose down`

## API Endpoints

### GET /tone

Returns a randomly selected tone for a user.

Response format:

```json
{
  "tone": "humorous" | "ironic" | "cynical"
}
```

## Configuration

The application uses the following environment variables:
PORT: The port on which the API will run (default: 9090)
You can modify these in the docker-compose.yaml file.

## Development

This project uses Docker to ensure a consistent development environment. The Dockerfile and docker-compose.yaml files are set up to enclose the Node.js environment within a container, eliminating the need for local tooling installation.
