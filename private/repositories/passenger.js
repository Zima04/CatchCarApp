const CRUDRepository = require('../common/crudRepository');

const createPassenger = (id) => ({
    id,
    userId: id,
});

const passengers = Array.from({ length: 100 })
    .map((_, i) => createPassenger(i));

module.exports = new CRUDRepository(passengers);