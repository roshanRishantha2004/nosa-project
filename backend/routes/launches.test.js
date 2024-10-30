const request = require('supertest');
const app = require('../app');
const { 
  connectDB,
  disconnectDB,
} = require('../db');
const {
    loadPlanetsData,
  } = require('../models/planets.model');

describe('Launches API', () => {
    
    beforeAll(async () => {
      await connectDB();
      await loadPlanetsData();
    });
  
    afterAll(async () => {
      await disconnectDB();
    });
  
    describe('Test GET /launches', () => {
      test('It should respond with 200 success', async () => {
        const response = await request(app)
          .get('/launches')
          .expect('Content-Type', /json/)
          .expect(200);
      });
    });
});
    
