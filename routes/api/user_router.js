var router = require('koa-router')()
var user_controller = require('../../app/controllers/user_controller')
router.prefix('/users')
router.get('/getUser', user_controller.getUser)
router.post('/registerUser', user_controller.registerUser)
router.post('/addPerson', user_controller.addPerson)
router.post('/updatePerson', user_controller.updatePerson)
module.exports = router