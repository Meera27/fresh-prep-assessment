import { v4 as uuidv4 } from 'uuid';
import { simulateDelay } from '../utils/helpers.js';

// Controller for generating and returning a UUID
export const getId = (req, res) => {
  const id = uuidv4();
  res.json({ id });
};

// Controller for getting user details with a simulated delay
export const getUser = async (req, res) => {
  try {
    // Simulate a 300ms delay
    await simulateDelay(300);
    
    // Create a mock user object
    const user = {
      id: uuidv4(),
      name: 'Meera Nair',
      email: 'meeramnair99@gmail.com'
    };
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details' });
  }
};

// Controller for simulating user creation with 50% success rate
export const createUser = (req, res) => {
  // Extract user data from the request body
  const { username } = req.body;

  // Simulate 50% chance of success
  const success = Math.random() < 0.5;
  
  if (success) {
    if (username) {
      res.json({ message: `User ${username} created successfully` });
    } else {
      res.json({ message: "User created successfully" });
    }
  } else {
    if (username) {
      res.status(500).json({ message: `Failed to create user ${username}` });
    } else {
      res.status(500).json({ message: "Failed to create user" });
    }
  }
};

