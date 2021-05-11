// STRETCH
const cars = [
  {
    car_vin: '12345',
    car_make: 'ford',
    car_model: 'focus',
    car_mileage: 70000,
    transmission: 'automatic',
    title: 'yes',
  },
  {
    car_vin: '23456',
    car_make: 'chevrolet',
    car_model: 'malibu',
    car_mileage: 35000,
    transmission: 'automatic',
    title: 'yes',
  },
  {
    car_vin: '34567',
    car_make: 'kia',
    car_model: 'sorrento',
    car_mileage: 65000,
    transmission: 'automatic',
    title: 'no',
  },
  {
    car_vin: '45678',
    car_make: 'subaru',
    car_model: 'outback',
    car_mileage: 38000,
    transmission: 'manual',
    title: 'yes',
  },
  {
    car_vin: '90123',
    car_make: 'kia',
    car_model: 'telluride',
    car_mileage: 10000,
    transmission: 'automatic',
    title: 'no',
  },
  {
    car_vin: '91234',
    car_make: 'chevrolet',
    car_model: 'edge',
    car_mileage: 38000,
    transmission: 'automatic',
    title: 'yes',
  },
  {
    car_vin: '92345',
    car_make: 'ford',
    car_model: 'escape',
    car_mileage: 46000,
    transmission: 'automatic',
    title: 'yes',
  },
  {
    car_vin: '94567',
    car_make: 'dodge',
    car_model: 'challenger',
    car_mileage: 55000,
    transmission: 'automatic',
    title: 'yes',
  },
];

exports.accounts = this.accounts;

exports.seed = function (knex, Promise) {
  return knex('cars')
    .truncate()
    .then(function () {
      return knex('cars').insert(cars);
    });
};
