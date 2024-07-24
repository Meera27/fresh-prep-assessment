import request from 'supertest';
import app from '../src/app.js';

describe('API Endpoints', () => {
  describe('GET /id', () => {
    // Test UUID generation speed
    it('should return a UUID in less than 50ms', async () => {
      const start = Date.now();
      const response = await request(app).get('/id');
      const end = Date.now();
      const duration = end - start;

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(typeof response.body.id).toBe('string');
      expect(duration).toBeLessThan(50);
    });
  });

  describe('GET /user', () => {
    // Test user retrieval with simulated delay
    it('should return user details with ~300ms delay', async () => {
      const start = Date.now();
      const response = await request(app).get('/user');
      const end = Date.now();
      const duration = end - start;

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('email');
      expect(response.body).toHaveProperty('phone');
      expect(response.body).toHaveProperty('biography');
      expect(duration).toBeGreaterThanOrEqual(300);
      expect(duration).toBeLessThan(350);
    });
  });

  describe('POST /user', () => {
    // Test user creation with 50% success rate
    it('should create a user or fail with 50% probability', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        biography: 'Test biography'
      };

      const responses = await Promise.all(
        Array(100).fill().map(() => request(app).post('/user').send(newUser))
      );

      const successCount = responses.filter(r => r.statusCode === 201).length;
      const failureCount = responses.filter(r => r.statusCode === 500).length;

      expect(successCount + failureCount).toBe(100);
      expect(successCount).toBeGreaterThan(40);
      expect(failureCount).toBeGreaterThan(40);
    });

    // Test validation of required fields
    it('should return 400 if required fields are missing', async () => {
      const incompleteUser = {
        name: 'Incomplete User'
      };

      const response = await request(app).post('/user').send(incompleteUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe('Name, email, phone and biography are required');
    });
  });
});
