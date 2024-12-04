// const {Brand} = require('../models/models')
// const ApiError = require('../error/ApiError');

class ProductController {
    // async create(req, res) {
    //     const {name} = req.body
    //     const brand = await Brand.findByPk create({name})
    //     return res.json(brand)
    // }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
async check(req, res) {
    const query = req.query
    res.json(query)
    
}
}

module.exports = new ProductController()
