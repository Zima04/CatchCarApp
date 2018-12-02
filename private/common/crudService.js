class CRUDService {

    constructor(repository) {
        this._repository = repository;
    }
    
    create(entity) {
        this._repository.create(entity);
    }

    read(cb) {
        return this._repository.read(cb);
    }

    update(cb, entity) {
        this._repository.update(cb, entity);
    }

    remove(cb) {
        this._repository.remove(cb);
    }

    paginate(cb, skip, top) {
        return this._repository.paginate(cb, skip, top);
    }
}

module.exports = CRUDService;