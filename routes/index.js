const Router = require('express')
const router = new Router()

const products = require('./products')
// const stories = require('./stories')

router.use('/products', products)
// router.use('/stories', stories)

module.exports = router