const { Shop } = require('../models/models')
const ApiError = require('../error/ApiError');

class ShopsController {
    //     async create(req, res) {
    //         const {name} = req.body
    //         const brand = await Brand.findByPk create({name})
    //         return res.json(brand)
    //     }

    async create(req, res, next) {
        const { name, plu } = req.body
        if (!name) {
            return next(ApiError.banRequest('Не задан name'))
        }

        const product = await Shop.create({ name, plu })
        return res.json(product)
    }

    async getAll(req, res) {
        const shop = await Shop.findAll()
        return res.json(shop)
    }

    async patch(req, res, next) {
        const { id, id_product } = req.body
        if (!id) {
            return next(ApiError.banRequest('Не задан id'))
        }
        if (!id_product) {
            return next(ApiError.banRequest('Не задан id_Product'))
        }

        const shop = await Shop.findByPk(id)
        shop.productid = id_product
        shop.name += "_1"
        await shop.save()
        return res.json(shop)
    }

}

module.exports = new ShopsController()
