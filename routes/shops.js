const Router = require('express')
const router = new Router()
const ShopsController = require('../controllers/shops')

router.post('/create', ShopsController.create) 
router.get('/get', ShopsController.getAll)
router.patch('/patch', ShopsController.patch)

module.exports = router