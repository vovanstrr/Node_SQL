const Router = require('express')
const router = new Router()
const ProductController = require('../controllers/products')

// router.post('/create', (req, res) => {res.json({massage: 'Working'})
// }) //products.create
router.post('/create', ProductController.create) 
router.get('/get', ProductController.getAll)
router.get('/find', ProductController.check)

// router.post('/saleplus', products.create)
// router.post('/saleminus', products.create)
//
// router.get('/filter', products.getAll)

module.exports = router