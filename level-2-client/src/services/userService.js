import { get, post } from './api';

export async function getUser() {
  return get('/user');
}

export async function createUser(userData) {
  return post('/user', userData);
}

export async function createUserWithRetry(userData) {
  while (true) {
    try {
      const result = await createUser(userData);
      if (result.message === 'User created successfully') {
        return result.user;
      }
    } catch (error) {
      console.error('Failed to create user, retrying...');
    }
  }
}