const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from Node.js CI/CD Pipeline!');
});

describe('GET /', () => {
  it('should return 200 and correct response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js CI/CD Pipeline!');
  });
});
