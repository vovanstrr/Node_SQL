// const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');
const { Product } = require('../models/models');

class ProductController {
    // async create(req, res) {
    //     const {name} = req.body
    //     const brand = await Brand.create({name})
    //     return res.json(brand)
    // }

    async getAll(req, res) {
        const products = await Product.findAll()
        return res.json(products)
    }

    async create(req, res, next) {
        // const body = req.body
        const {name, plu} = req.body
        if (!plu) {
            return next(ApiError.banRequest('Не задан plu'))
        }
        if (!name) {
            return next(ApiError.banRequest('Не задан name'))
        }
        
        const product = await Product.create({name, plu})
        return res.json(product)
        // res.json(body)

        // const brands = await Brand.findAll()
        // return res.json(brands)
    }

    async check(req, res, next) {
        const {id} = req.query
        
        if (!id) {
            return next(ApiError.banRequest('Не задан ID'))
        }
        const product = await Product.findByPk(id)
        if (product) {
            return res.json(product)
        } else {
            console.log('Not found!')
            
        }
        // if (!plu) {
        //     return next(ApiError.banRequest('Не задан plu'))
        // }
        // console.log(req.methdot);
        // console.log(req.headers);

        

    }
}

module.exports = new ProductController()
