const service = require('../services/driver');
const router = require('../common/crudRouter')(service);

module.exports = {
    router,
    path: 'driver',
};
