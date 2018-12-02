const CRUDService = require('../common/crudService');

const userService = require('./user');
const driverService = require('./driver');
const repository = require('../repositories/trip');

class TripService extends CRUDService {
    constructor() {
        super(repository);
    }

    read(cb) {
        const trip = super.read(cb);
        return userService.appendUser(trip);
    }

    paginate(cb, skip, top) {
        const trips = super.paginate(cb, skip, top);
        return trips.map(t => {
          const {userId, ...rest} = t;

          const user = driverService.read(d => d.id === userId);
          return {user, ...rest};
        });
    }
}

module.exports = new TripService();
