const ApiError = require('../error/ApiError');
const { DeviceInfo } = require('../models/models');
const { Product } = require('../models/models');

class DeviceInfoController {

    async getAll(req, res) {
        const device = await DeviceInfo.findAll()
        return res.json(device)
    }

    async create(req, res, next) {
        // const body = req.body
        const {title, desc, id_prod} = req.body
        if (title && desc && id_prod) {
            try {
                const product = await Product.findByPk(id_prod)
                await product.createDeviceInfo({ title, description: desc })
                // const device = await DeviceInfo.create({ title, desc })
                return res.json(product)
            } catch(e) {
                 console.log('error! ', e.message);  //.detail
                return next(ApiError.banRequest(e.message))
            }
        } else {
            return next(ApiError.banRequest('Не задан title, desc'))
        }
    }
}

module.exports = new DeviceInfoController()