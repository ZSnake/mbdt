const { getDishes, addDish } = require('./controllers/dishes');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: () => (`<h1>Test</h1>`),
  },
  {
    method: 'GET',
    path: '/dishes',
    handler: getDishes,
  },
  {
    method: 'POST',
    path: '/dish',
    handler: addDish,
  },
]