const CRUDService = require('../common/crudService');

const userService = require('./user');
const repository = require('../repositories/passenger');

class PassengerService extends CRUDService {
    constructor() {
        super(repository);
    }

    read(cb) {
        const passenger = super.read(cb);
        return userService.appendUser(passenger);
    }

    paginate(cb, skip, top) {
        const passengers = super.paginate(cb, skip, top);
        return passengers.map(p => {
            const passenger = userService.appendUser(p);
            const { userId, user } = passenger;
            return { userId, ...user };
        });
    }
}

module.exports = new PassengerService();