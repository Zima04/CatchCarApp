class CRUDRepository {

    constructor(data) {
        this._data = data;
    }

    create(entity) {
        this._data.push(entity);
    }

    read(cb) {
        return this._data.find(cb);
    }

    update(cb, entity) {
        const index = this._data.findIndex(cb);
        if (index === -1) return;

        this._data[index] = entity;
    }

    remove(cb) {
        const index = this._data.findIndex(cb);
        if (index === -1) return;
        
        this._data.splice(index, 1);
    }

    paginate(cb, skip = 0, top = 20) {
        return this._data.filter(cb)
            .slice(skip, skip + top);
    }
}

module.exports = CRUDRepository;