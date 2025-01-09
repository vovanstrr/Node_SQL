// const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');
const { Product, Shop } = require('../models/models');

// const { VM } = require('vm2');
// const vm = new VM();
// vm.run("console.log('Выполнение в песочнице');"); // Выполнение в песочнице

class ProductController {

    async getAll(req, res) {
        const { id, plu, name, id_shop } = req.query
        let products;
        if (!id && !plu && !name && !id_shop) {
            products = await Product.findAll()
        }
        if (id && !plu && !name) {
            products = await Product.findAll({where: {id}}) 
        }
        if (!id && plu && !name) {
            products = await Product.findAll({where: {plu}}) 
        }
        if (!id && !plu && name) {
            products = await Product.findAll({where: {name}}) 
        }
        if (!id && !plu && !name && id_shop) {
            products = await Product.findAll({where: {id_shop}}) 
        }
        
        return res.json(products)
    }

    // async get(req, res, next) {
    //     const { id } = req.query
    //     if (id) {
    //         const product = await Product.findByPk(id)
    //         if (!product) {
    //             return next(ApiError.banRequest('Не найнен продукт'))
    //         } else {
    //             return res.json(product)
    //         }
    //     } else {
    //         return next(ApiError.banRequest('Не задан id')) 
    //     }
    // } 

    async create(req, res, next) {
        // const body = req.body
        const { name, plu, id_shop } = req.body
        if (!plu) {
            return next(ApiError.banRequest('Не задан plu'))
        }
        if (!name) {
            return next(ApiError.banRequest('Не задан name'))
        }
        if (!name && !plu) {
            return next(ApiError.banRequest('Не задан name и plu'))
        }

        const product = await Product.create({ name, plu })
        if (id_shop) {
            const shop = await Shop.findByPk(id_shop)
            if (shop) {
                await product.setShop(shop)
                return res.json(product)
            }
        }
        return res.json(product)
    }

    async setShop(req, res, next) {
        const { id, name, plu, id_shop } = req.body
        if (id && id_shop) {
            const product = await Product.findByPk(id)
            if (product) {
                const shop = await Shop.findByPk(id_shop)
                if (shop) {
                    await product.setShop(shop)
                    return res.json(product)
                } else {
                    return next(ApiError.banRequest(`нет такой записи id_shop ${id_shop}`))    
                }
                return res.json(product)
            } else {
                // console.log('Not found!')
                return next(ApiError.banRequest(`нет такой записи id ${id}`))
            }
        } else {
            return next(ApiError.banRequest(`нет указан id или id_shop`))
        }
    }


    async check(req, res, next) {
        const { id } = req.query

        if (!id) {
            return next(ApiError.banRequest('Не задан ID'))
        }
        const product = await Product.findByPk(id)

        if (product) {
            return res.json(product)
        } else {
            // console.log('Not found!')
            return next(ApiError.banRequest('нет такой записи'))
        }
        // if (!plu) {
        //     return next(ApiError.banRequest('Не задан plu'))
        // }
        // console.log(req.methdot);
        // console.log(req.headers);

    }
}

module.exports = new ProductController()
