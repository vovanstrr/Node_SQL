const { Shop, Product } = require('../models/models')
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
        try {
            const product = await Shop.create({ name, plu })
            return res.json(product)
        } catch(e) {
            // console.log('error! ', e.original.detail);
            return next(ApiError.banRequest(e.original.detail))
        }

    }

    async getAll(req, res) {
        const shop = await Shop.findAll()
        return res.json(shop)
    }

    async viewProd(req, res, next) {
        const { id } = req.query

        if (id) {
        const shop = await Shop.findAll({where: {id}}) 
        const product = await shop.getShop().name
        return res.json(shop)
        } else {
        return next(ApiError.banRequest(`нет такой записи id_shop ${id_shop}`)) 
        }
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
        const product = await Product.findByPk(id_product)
        if (shop && product) {
            // shop.productid = product.id    
            await product.setShop(shop) //create
            return res.json(shop)
        } else {
            return next(ApiError.banRequest('ошибка сохранения...'))
        }
        // console.log('shop.productid ', typeof(shop.productid));
        // shop.productid = id_product
        // shop.name += "_1"
        // await shop.save()
        
    }

}

module.exports = new ShopsController()
