const CRUDRepository = require('../common/crudRepository');

const createReview = (id) => ({
  id,
  userId: id,
  reviewerId: Math.round(Math.random() * (99)),
  stars: Math.round(Math.random() * (5)),
  description: `Хороший водитель.Езжу часто.Общительный.Убранный автомобиль`,
});

const reviews = Array.from({length: 100})
  .map((_, i) => createReview( Math.round(Math.random() * (99))));
const reviews2 = Array.from({length: 100})
  .map((_, i) => createReview( Math.round(Math.random() * (99))));
const reviews3 = Array.from({length: 100})
  .map((_, i) => createReview( Math.round(Math.random() * (99))));

module.exports = new CRUDRepository([...reviews,...reviews2,...reviews3]);
