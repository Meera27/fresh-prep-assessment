import { v4 as uuidv4 } from 'uuid';

export const getId = (req, res) => {
  const id = uuidv4();
  res.json({ id });
};
