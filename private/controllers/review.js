const service = require('../services/review');
const router = require('../common/crudRouter')(service, false);

function buildFilter(params) {
    let { userId } = params;

    userId = Number.parseInt(userId);

    const filter = (x) => {
        if (!Number.isNaN(userId) && x.userId !== userId) {
            return false;
        }
        return true;
    };

    return filter;
}

router.get('/', (req, res) => {
    let { skip, top } = req.query;
    [skip, top] = [
        (skip && Number.parseInt(skip)), 
        (top && Number.parseInt(top))
    ];

    const filter = buildFilter(req.query);

    const entities = service.paginate(filter, skip, top);

    res.json(entities);
});

module.exports = {
    router,
    path: 'review',
};
