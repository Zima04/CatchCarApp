const CRUDService = require('../common/crudService');

const userService = require('./user');
const repository = require('../repositories/driver');

class DriverService extends CRUDService {
    constructor() {
        super(repository);
    }

    read(cb) {
        let driver = super.read(cb);
        driver = userService.appendUser(driver);
        const { userId, car, user } = driver;
        return { userId, car, ...user };
    }

    paginate(cb, skip, top) {
        const drivers = super.paginate(cb, skip, top);
        return drivers.map(d => {
            const driver = userService.appendUser(d);
            const { userId, car, user } = driver;
            return { userId, car, ...user };
        });
    }
}

module.exports = new DriverService();
