import { get, post } from './api';
import { faker } from '@faker-js/faker';

export async function getUser() {
  return get('/user');
}

export async function getAllUsers() {
  return get('/users');
}

export async function createUser(userData) {
  return post('/user', userData);
}

export async function createUserWithRetry(userData = null) {
  while (true) {
    try {
      const data = userData || {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        biography: faker.lorem.paragraph()
      };
      const result = await createUser(data);
      if (result.message === 'User created successfully') {
        return result.user;
      }
    } catch (error) {
      console.error('Failed to create user, retrying...');
    }
  }
}
