const Router = require('express')
const router = new Router()

const products = require('./products')
const shops = require('./shops')

router.use('/products', products)
router.use('/shop', shops)

module.exports = router