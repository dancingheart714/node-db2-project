const db = require('../../data/db-config');

const getAll = () => {
  return db.select('*').from('cars');
};

const getById = (id) => {
  return db('cars').where({ id }).first();
};

const create = (car) => {
  return db('cars')
    .insert(car)
    .then((id) => {
      return getById(id[0]);
    });
};

const getVinNumber = (vin) => {
  return db('cars').where({ vin }).first();
};

module.exports = {
  getAll,
  getById,
  create,
  getVinNumber,
};
