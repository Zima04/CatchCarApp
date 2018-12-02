const CRUDService = require('../common/crudService');
const repository = require('../repositories/user');

class UserService extends CRUDService {
    constructor() {
        super(repository);
    }
    
    appendUser(entity) {
        const { userId, ...rest } = entity;
        
        const user = super.read(u => u.id === userId);
        return { ...rest, user };
    }
}

module.exports = new UserService();