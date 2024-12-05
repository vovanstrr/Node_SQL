// const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');
const { Type } = require('../models/models');

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

    async create(req, res) {
        const body = req.body
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
        // res.json(body)

        // const brands = await Brand.findAll()
        // return res.json(brands)
    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.banRequest('Не задан ID'))
        }
        console.log(req.methdot);
        console.log(req.headers);

        res.json(id)

    }
}

module.exports = new ProductController()
