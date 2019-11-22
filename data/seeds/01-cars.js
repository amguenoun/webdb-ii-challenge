
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: "1", make: "make", model: 'model', milage: "milage" },
        { VIN: "2", make: "make", model: 'model', milage: "milage" },
        { VIN: "3", make: "make", model: 'model', milage: "milage", transmission: "notNUll" },
      ]);
    });
};
