import { v4 as uuidv4 } from 'uuid';
import { simulateDelay } from '../utils/helpers.js';


let user = []
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
    if(user.length == 0){
    const firstUser = {
      id: uuidv4(),
      name: 'Firstuser',
      email: 'first@gmail.com',
      phone : "0000000000"
    };
    res.status(200).json(firstUser);
  }
  const randomUser = user[Math.floor(Math.random() * user.length)];
  res.json(randomUser);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details' });
  }
};

// Controller for simulating user creation with 50% success rate
export const createUser = async (req, res) => {
  try {
    if (Math.random() < 0.5) {
      return res.status(500).json({ message: 'Failed to create user' });
    }

    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email and phone are required' });
    }

    const newUser = { id: uuidv4(), name, email, phone };
    user.push(newUser);

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

