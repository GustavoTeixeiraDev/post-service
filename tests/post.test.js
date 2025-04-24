const request = require('supertest');
const app = require('../server');

jest.mock('../models/postModel', () => ({
  find: jest.fn().mockResolvedValue([]),
}));

describe('Post routes', () => {
  it('deve retornar lista vazia de posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
