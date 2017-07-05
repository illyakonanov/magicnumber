/**
 * This is the test
 */
const request = require('request-promise');
const expect = require('chai').expect;

describe('Generate Magic number API', () => {
  const url = 'http://localhost:9090';
  describe ('Should return positive results', () => {
    it ('returns status 200', async () => {
      const response = await request({
        url: `${url}/magicnumber?x=2&y=2`,
        resolveWithFullResponse: true,
      });
      expect(response.statusCode).to.equal(200);
    });

    it ('returns magic number', async () => {
      const response = await request({
        url: `${url}/magicnumber?x=2&y=2`,
        resolveWithFullResponse: true,
      });
      expect(response.body).to.equal('Magic number is 2');
    });
  });

  describe ('Should returns negative results', () => {
    it ('returns success false', async () => {
      const response = await request(
        `${url}/magicnumber?x=2&y=fail-param`,
      );
      const success = JSON.parse(response).success;
      expect(success).to.equal(false);
    });

    it ('returns validation errors', async () => {
      const response = await request(
        `${url}/magicnumber?x=2&y=fail-param`,
      );
      const errors = JSON.parse(response).errors;
      expect(!!errors.length).to.equal(true);
    });
  });
});
