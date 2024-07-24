import { v4 as uuidv4 } from 'uuid';

// Function to generate and return a new UUID
export const getId = (req, res) => {
  const id = uuidv4();
  res.json({ id });
};
