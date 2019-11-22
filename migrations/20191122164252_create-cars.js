
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('VIN')
            .unique()
            .notNullable();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.text('milage')
            .notNullable();
        tbl.text('transmission');
        tbl.text('status');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
