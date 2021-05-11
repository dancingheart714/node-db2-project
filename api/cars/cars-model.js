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
const create = async (car) => {
  const [id] = await db('cars').insert(car);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
};
