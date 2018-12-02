const service = require('../services/user');
const router = require('../common/crudRouter')(service);

module.exports = {
    router,
    path: 'user',
};