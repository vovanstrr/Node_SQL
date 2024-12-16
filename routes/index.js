const Router = require('express')
const router = new Router()

const products = require('./products')
const shops = require('./shops')
const deviceInfo = require('./deviceInfo')

router.use('/products', products)
router.use('/shop', shops)
router.use('/devinf', deviceInfo)

module.exports = router