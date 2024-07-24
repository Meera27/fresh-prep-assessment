import { v4 as uuidv4 } from 'uuid';
import { simulateDelay } from '../utils/helpers.js';
import { readDatabase, writeDatabase, updateDatabase } from '../db/index.js';
import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    await simulateDelay(300);
    const data = await readDatabase();
    res.status(200).json(data.users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

export const getRandomUser = async (req, res) => {
  try {
    await simulateDelay(300);
    const data = await readDatabase();
    
    if (data.users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    
    const randomIndex = Math.floor(Math.random() * data.users.length);
    const randomUser = data.users[randomIndex];
    
    res.json(randomUser);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random user' });
  }
};

export const getUser = async (req, res) => {
  try {
    await simulateDelay(300);
    const data = await readDatabase();
    const user = data.users.find(u => u.id === req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, phone, biography } = req.body;
    if (!name || !email || !phone || !biography) {
      return res.status(400).json({ message: 'Name, email, phone and biography are required' });
    }

    const newUser = new User(name, email, phone, biography);
    newUser.id = uuidv4();

    if (Math.random() < 0.5) {
      return res.status(500).json({ message: 'Failed to create user' });
    }

    await writeDatabase(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const data = await readDatabase();
    const userIndex = data.users.findIndex(u => u.id === req.params.id);
    if (userIndex !== -1) {
      data.users.splice(userIndex, 1);
      await updateDatabase(data);
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

