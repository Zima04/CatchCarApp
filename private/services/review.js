const CRUDService = require('../common/crudService');

const userService = require('./user');
const repository = require('../repositories/review');

class ReviewService extends CRUDService {
    constructor() {
        super(repository);
    }

    read(cb) {
        const review = super.read(cb);
        const withUser = userService.appendUser(review);
        return this.appendReviewer(withUser);
    }

    paginate(cb, skip, top) {
        const reviews = super.paginate(cb, skip, top);
        return reviews.map(r => {
            const withUser = userService.appendUser(r);
            return this.appendReviewer(withUser);
        });
    }

    appendReviewer(entity) {
        console.log('bla');
        const { reviewerId, ...rest } = entity;
        const reviewer = userService.read(u => u.id === reviewerId);
        console.log(reviewer);

        if (!reviewer){
          const firstOrDefault = userService.paginate(_ => true, 0, 1)[0];
          console.log('bla2');
          console.log(firstOrDefault);
          return {...rest, reviewer: firstOrDefault}
        }
        return { ...rest, reviewer };
    }
}

module.exports = new ReviewService();
