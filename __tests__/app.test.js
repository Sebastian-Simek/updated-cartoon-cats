const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    expect(res.body.length).toEqual(4);
  });
});

it('/cats/:id should return cat detail', async () => {
  const res = await request(app).get('/cats/1');
  const felix = {
    id: '1',
    name: 'Felix',
    type: 'Tuxedo',
    year: 1892,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
    lives: 3,
    isSideKick: false,

  };
  expect(res.body).toEqual(felix);
});


afterAll(() => {
  pool.end();
});
