const db = require('../../data/db-config');

//select * from cars
const getAll = () => {
  return db('cars');
};

//select * from cars where id = 1
const getById = (id) => {
  return db('cars').where('id', id).first();
};

//newly created car record
const create = (car) => {
  return db('cars')
    .insert(car)
    .then((id) => {
      return getById(id[0]);
    });
};

module.exports = {
  getAll,
  getById,
  create,
};
