import { promises as fs } from 'fs';
import path from 'path';

// Define the path to the database file
const dbPath = path.join(process.cwd(), 'src', 'db', 'data.json');

// Function to read the database file
export async function readDatabase() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

// Function to add a new user to the database
export async function writeDatabase(user) {
  const data = await readDatabase();
  data.users.push(user);
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

// Function to update the entire database
export async function updateDatabase(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}
