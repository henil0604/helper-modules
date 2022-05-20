const MongoDbModel = class {
    constructor(model) {
        this.model = model;
    }

    async create(...args) {
        return await this.createOne(...args);
    }

    async createOne(data) {
        let instance = new this.model(data);
        await instance.save()
        return instance;
    }

    async createMany(data) {
        let instances = await this.model.insertMany(data);
        return instances;
    }

    async get(...args) {
        return await this.getOne(...args);
    }

    async getMany(data) {
        let instances = await this.model.find(data);
        return instances;
    }

    async getOne(data) {
        let instance = await this.model.findOne(data);
        return instance;
    }

    async update(...args) {
        return await this.updateOne(...args);
    }

    async updateMany(find, update, set = true) {
        if (set === true) {
            update = {
                $set: update
            };
        }
        let instances = await this.model.updateMany(find, update);
        return instances;
    }

    async updateOne(find, update, set = true) {
        if (set === true) {
            update = {
                $set: update
            };
        }
        let instance = await this.model.updateOne(find, update);
        return instance;
    }

    async delete(...args) {
        return await this.deleteOne(...args);
    }

    async deleteMany(find) {
        let instances = await this.model.deleteMany(find);
        return instances;
    }

    async deleteOne(find) {
        let instances = await this.model.deleteOne(find);
        return instances;
    }

    async clear() {
        let instances = await this.model.deleteMany();
        return instances;
    }

    async getAll() {
        let instances = await this.getMany();
        return instances;
    }

}




module.exports = MongoDbModel;