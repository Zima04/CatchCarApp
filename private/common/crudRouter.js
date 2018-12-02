function configure(service, pagination = true) {
    const express = require('express');
    const router = express.Router();

    function parseId(req, res) {
        const id = Number.parseInt(req.params.id);
        if (!Number.isNaN(id)) return id;

        res.status(400).json({ message: 'Incorrect id.' });

        throw new Error('Cannot parse id.');
    }

    router.post('/', (req, res) => {
        service.create(req.body);

        return res.sendStatus(200);
    });

    router.get('/:id', (req, res) => {
        const id = parseId(req, res);
        const entity = service.read(x => x.id === id);

        return res.json(entity);
    });

    router.put('/:id', (req, res) => {
        const id = parseId(req, res);
        service.update(x => x.id === id, req.body);

        return res.sendStatus(200);
    });

    router.delete('/:id', (req, res) => {
        const id = parseId(req, res);
        service.remove(x => x.id === id);

        return res.sendStatus(200);
    });

    pagination && router.get('/', (req, res) => {
        let { skip, top } = req.query;
        [skip, top] = [
            (skip && Number.parseInt(skip)), 
            (top && Number.parseInt(top))
        ];
        
        const entities = service.paginate(() => true, skip, top);

        res.json(entities);
    });

    return router;
}

module.exports = configure;