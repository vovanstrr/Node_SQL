const Router = require('express')
const router = new Router()
// const brandController = require('../controllers/brandController')

router.post('/create', (req, res) => {res.json({massage: 'Working'})
}) //products.create
// router.post('/sale', products.create)
// router.post('/saleplus', products.create)
// router.post('/saleminus', products.create)
//
// router.get('/filter', products.getAll)

module.exports = router