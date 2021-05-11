// STRETCH
exports.seed = async function (knex) {
  await knex('cars').truncate();

  await knex('cars').insert([
    {
      vin: '12345',
      make: 'ford',
      model: 'focus',
      mileage: 70000,
      transmission: 'automatic',
      title: 'yes',
    },
    {
      vin: '23456',
      make: 'chevrolet',
      model: 'malibu',
      mileage: 35000,
      transmission: 'automatic',
      title: 'yes',
    },
    {
      vin: '34567',
      make: 'kia',
      model: 'sorrento',
      mileage: 65000,
      transmission: 'automatic',
      title: 'no',
    },
    {
      vin: '45678',
      make: 'subaru',
      model: 'outback',
      mileage: 38000,
      transmission: 'manual',
      title: 'yes',
    },
    {
      vin: '90123',
      make: 'kia',
      model: 'telluride',
      mileage: 10000,
      transmission: 'automatic',
      title: 'no',
    },
    {
      vin: '91234',
      make: 'chevrolet',
      model: 'edge',
      mileage: 38000,
      transmission: 'automatic',
      title: 'yes',
    },
    {
      vin: '92345',
      make: 'ford',
      model: 'escape',
      mileage: 46000,
      transmission: 'automatic',
      title: 'yes',
    },
    {
      vin: '94567',
      make: 'dodge',
      model: 'challenger',
      mileage: 55000,
      transmission: 'automatic',
      title: 'yes',
    },
  ]);
};
