const Router = require('express')
const router = new Router()
const DeviceInfoController = require('../controllers/deviceInfo')

router.get('/getall', DeviceInfoController.getAll)
router.post('/create', DeviceInfoController.create)

module.exports = router
