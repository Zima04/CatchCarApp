const service = require('../services/passenger');
const router = require('../common/crudRouter')(service);

module.exports = {
    router,
    path: 'passenger',
};