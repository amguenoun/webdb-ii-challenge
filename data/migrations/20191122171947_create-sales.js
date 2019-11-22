
exports.up = function (knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.text('amount')
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sales');
};
