// Import the Express application
import app from './app.js';

// Set the port for the server
const PORT = process.env.PORT || 3050;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

