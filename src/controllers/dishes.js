const dishes = [
  {
    name: 'Orange Chicken',
    ingredients: ['Orange', 'Chicken', 'Mustard']
  },
  {
    name: 'Orange Chicken',
    ingredients: ['Orange', 'Chicken', 'Mustard']
  },
]

const getDishes = () => dishes;

const addDish = (req, h) => {
  dishes.push(req.payload)
  return req.payload;
};

module.exports = {
  getDishes,
  addDish,
}