import request from 'supertest';
import app from '../src/app.js';

describe('API Endpoints', () => {
  // Test GET /id endpoint
  test('GET /id should return a UUID in less than 50ms', async () => {
    const start = Date.now();
    const response = await request(app).get('/id');
    const end = Date.now();
    const duration = end - start;

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(typeof response.body.id).toBe('string');
    expect(duration).toBeLessThan(50);
  });

  // Test GET /user endpoint
  test('GET /user should return user details with ~300ms delay', async () => {
    const start = Date.now();
    const response = await request(app).get('/user');
    const end = Date.now();
    const duration = end - start;

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(duration).toBeGreaterThanOrEqual(300);
    expect(duration).toBeLessThan(350); // Allow some margin for execution time
  });

  // Test POST /user endpoint
  describe('POST /user', () => {
    test('should return success or failure with 50% probability', async () => {
      const responses = await Promise.all(
        Array(100).fill().map(() => request(app).post('/user'))
      );

      const successCount = responses.filter(r => r.statusCode === 200).length;
      const failureCount = responses.filter(r => r.statusCode === 500).length;

      expect(successCount + failureCount).toBe(100);
      expect(successCount).toBeGreaterThan(40);
      expect(failureCount).toBeGreaterThan(40);
    });

    test('should include username in response if provided', async () => {
      const username = 'testuser';
      const response = await request(app)
        .post('/user')
        .send({ username });

      if (response.statusCode === 200) {
        expect(response.body.message).toBe(`User ${username} created successfully`);
      } else {
        expect(response.body.message).toBe(`Failed to create user ${username}`);
      }
    });

    test('should use generic message if username is not provided', async () => {
      const response = await request(app).post('/user');

      if (response.statusCode === 200) {
        expect(response.body.message).toBe('User created successfully');
      } else {
        expect(response.body.message).toBe('Failed to create user');
      }
    });
  });
});
