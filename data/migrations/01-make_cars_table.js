//vin, make, model, mileage, transmission type, status of title
exports.up = async function (knex) {
  await knex.schema.table('cars', (table) => {
    table.increments('car_id');
    table.text('car_vin').unique.notNullable();
    table.text('car_make').notNullable();
    table.text('car_model').notNullable();
    table.integer('car_mileage').notNullable();
    table.text('transmission');
    table.text('title');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars');
};
