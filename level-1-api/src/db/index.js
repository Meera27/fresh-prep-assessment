import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src', 'db', 'data.json');

export async function readDatabase() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

export async function writeDatabase(user) {
  const data = await readDatabase();
  data.users.push(user);
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

export async function updateDatabase(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}
