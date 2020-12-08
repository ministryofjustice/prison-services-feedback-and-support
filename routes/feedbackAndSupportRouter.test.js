const request = require('supertest')
const app = require('../app')

it('should render the Pathfinder page with a link to Pathfinder support', async () => {
  const res = await request(app).get('/feedback-and-support/pathfinder')
  expect(res.statusCode).toEqual(200)
  expect(res.text).toContain('http://localhost:3001/useful-links/support')
})
